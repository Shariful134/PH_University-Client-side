import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import {
  bloogGroupsOptions,
  gendersOptions,
  studentDefaultData,
  TResponse,
} from "../../../constant/global";
import PHDatePicker from "../../../components/form/PHDatePicker";
import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagementApi";
import { useGetAllcademicDepertmentQuery } from "../../../redux/features/admin/academicDepertmentApi";
import { useAddStudentMutation } from "../../../redux/features/admin/userManagementApi";
import { toast } from "sonner";

const CreateStudent = () => {
  const [addStudent, { data, error }] = useAddStudentMutation();
  console.log("Student add data: ", data, "error: ", error);
  //parallel query
  const { data: sData, isLoading: sisLoading } =
    useGetAllSemesterQuery(undefined);

  const { data: dData, isLoading: disLoading } =
    useGetAllcademicDepertmentQuery(undefined, { skip: sisLoading });
  // console.log("dData: ", dData);

  const semesterOptions = sData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const depertmentOptions = dData?.data?.map((item: FieldValues) => ({
    value: item._id,
    label: item.name,
  }));

  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const studentData = {
      password: "student123",
      student: data,
    };
    console.log("studentData: ", studentData);
    const formData = new FormData();

    formData.append("data", JSON.stringify(studentData));
    formData.append("file", data.profileImg);

    try {
      const res = (await addStudent(formData)) as TResponse<any>;
      // console.log("create faculty: ", res);
      if (res.error) {
        toast.error(res.error.data.message);
      } else {
        toast.success("Depertment Created SucceccFully!");
      }
    } catch (error) {
      console.log(error);
      // toast.error("Somthing went wrong!");
    }

    //this for development and just checking
    // formData.append("somthing", " data of somthing");
    // console.log(Object.fromEntries(formData));
  };

  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onsubmit} defaultValues={studentDefaultData}>
          <Row gutter={8}>
            <Divider>Personal Info</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="name.firstName"
                label="FirstName"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="name.middleName"
                label="MiddleName"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="name.lastName"
                label="LastName"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name="gender"
                label="Gender"
                options={gendersOptions}
              ></PHSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name="bloogGroup"
                label="BloodGroup"
                options={bloogGroupsOptions}
              ></PHSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHDatePicker
                name="dateOfBirth"
                label="DateOfBirth"
              ></PHDatePicker>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Controller
                name="profileImg"
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item label="Picture">
                    <Input
                      type="file"
                      value={value?.fileName}
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                    />
                  </Form.Item>
                )}
              />
            </Col>
            <Divider>Contact Info</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="email" name="email" label="Email"></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="contactNo"
                label="ContactNumber"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="emergencyContactNo"
                label="EmergencyContactNo"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="permanentAddress"
                label="PermanentAddress"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="presentAddress"
                label="PresentAddress"
              ></PHInput>
            </Col>
            <Divider>Guardian Info</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.fatherName"
                label="FatherName"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.fatherOccupation"
                label="FatherOccupation"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.fatherContactNo"
                label="PatherContactNo"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.motherName"
                label="MotherName"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.motherOccupation"
                label="MotherOccupation"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.motherContactNo"
                label="MotherContactNo"
              ></PHInput>
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localGuardian.name"
                label="Name"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localGuardian.occupation"
                label="Occupation"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localGuardian.contactNo"
                label="ContactNo"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localGuardian.address"
                label="Address"
              ></PHInput>
            </Col>
            <Divider>Academic Info</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name="academicDepartment"
                label="AcademicDepartment"
                options={depertmentOptions}
                disabled={disLoading}
              ></PHSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name="admissionSemester"
                label="AdmissionSemester"
                options={semesterOptions}
                disabled={sisLoading}
              ></PHSelect>
            </Col>
            {/* <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="academicFaculty"
                label="AcademicFaculty"
              ></PHInput>
            </Col> */}
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
