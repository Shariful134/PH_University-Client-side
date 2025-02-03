import { FieldValues, SubmitHandler } from "react-hook-form";

import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagementApi";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Row } from "antd";
import PHInput from "../../../components/form/PHInput";
import PHSelectWithwatch from "../../../components/form/PHSelectWithwatch";
import { useState } from "react";
import PHSelect from "../../../components/form/PHSelect";
import {
  useGetAllCourseFacultiesQuery,
  useGetAllCoursesQuery,
  useGetAllRegisteredSemesterQuery,
} from "../../../redux/features/admin/courseManagement";
import { useGetAllcademicFacultyQuery } from "../../../redux/features/admin/academicFacultyApi";
import { useGetAllcademicDepertmentQuery } from "../../../redux/features/admin/academicDepertmentApi";
import PHTimePicker from "../../../components/form/PHTimePicker";

const CreateOfferedCourses = () => {
  const [id, setId] = useState("");
  const [courseId, setCourseId] = useState("");
  //   console.log("Inside parent component: ", id);
  const { data: academicSemester } = useGetAllSemesterQuery(undefined);
  const { data: semesterRegisData } =
    useGetAllRegisteredSemesterQuery(undefined);

  const { data: academicFacultyData } = useGetAllcademicFacultyQuery(undefined);

  const { data: academicDepartmentData } =
    useGetAllcademicDepertmentQuery(undefined);

  const { data: courseData } = useGetAllCoursesQuery(undefined);

  const { data: facultiesData, isFetcheingcourseFaculty } =
    useGetAllCourseFacultiesQuery(courseId, { skip: !courseId });

  //   console.log(facultiesData);

  const academicSemesterOptions = academicSemester?.data?.map((item) => ({
    label: item.name,
    value: item._id,
  }));

  const semesterRegistrationOptions = semesterRegisData?.data?.map((item) => ({
    label: item.status,
    value: item._id,
  }));
  const academicFacultyOptions = academicFacultyData?.data?.map((item) => ({
    label: item.name,
    value: item._id,
  }));
  const academicDepartmentOptions = academicDepartmentData?.data?.map(
    (item) => ({
      label: item.name,
      value: item._id,
    })
  );
  const courseOptions = courseData?.data?.map((item) => ({
    label: item.title,
    value: item._id,
  }));
  const facultyOptions = facultiesData?.data?.faculties?.map((item) => ({
    label: item.fullName,
    value: item._id,
  }));
  const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const daysOptions = days.map((item) => ({
    label: item,
    value: item,
  }));

  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Row>
        <Col span={24}>
          <PHForm onSubmit={onsubmit}>
            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  name="semesterRegistration"
                  label="SemesterRegistration"
                  options={semesterRegistrationOptions}
                ></PHSelect>
              </Col>

              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelectWithwatch
                  onValueChange={setId}
                  name="academicSemester"
                  label="AcademicSemester"
                  options={academicSemesterOptions}
                ></PHSelectWithwatch>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  name="academicFaculty"
                  label="AcademicFaculty"
                  options={academicFacultyOptions}
                ></PHSelect>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  name="academicDepartment"
                  label="AcademicDepartment"
                  options={academicDepartmentOptions}
                ></PHSelect>
              </Col>

              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelectWithwatch
                  onValueChange={setCourseId}
                  options={courseOptions}
                  name="course"
                  label="Course"
                ></PHSelectWithwatch>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  disabled={!courseId || isFetcheingcourseFaculty}
                  name="faculty"
                  label="Faculty"
                  options={facultyOptions}
                ></PHSelect>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="number"
                  name="maxCapacity"
                  label="MaxCapacity"
                ></PHInput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput type="number" name="section" label="Section"></PHInput>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  name="days"
                  label="Days"
                  options={daysOptions}
                ></PHSelect>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHTimePicker name="startTime" label="StartTime"></PHTimePicker>
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHTimePicker name="endTime" label="EndTime"></PHTimePicker>
              </Col>
            </Row>
            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Row>
    </div>
  );
};

export default CreateOfferedCourses;
