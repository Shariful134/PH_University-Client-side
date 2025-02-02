import { FieldValues, SubmitHandler } from "react-hook-form";

import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagementApi";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHInput from "../../../components/form/PHInput";
import PHSelectWithwatch from "../../../components/form/PHSelectWithwatch";
import { useState } from "react";

const CreateOfferedCourses = () => {
  const [id, setId] = useState("");
  console.log("Inside parent component: ", id);
  const { data: academicSemester } = useGetAllSemesterQuery(undefined);

  const academicSemesterOptions = academicSemester?.data?.map((item) => ({
    label: item.name,
    value: item._id,
  }));
  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Flex justify="center">
        <Col span={12}>
          <PHForm onSubmit={onsubmit}>
            <PHSelectWithwatch
              onValueChange={setId}
              name="academicSemester"
              label="AcademicSemester"
              options={academicSemesterOptions}
            ></PHSelectWithwatch>
            <PHInput
              disabled={!id}
              type="text"
              name="course"
              label="Course"
            ></PHInput>
            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateOfferedCourses;
