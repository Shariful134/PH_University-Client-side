import { Button, Col, Divider, Form, Input, Row } from "antd";
import PHForm from "../../../components/form/PHForm";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import {
  bloogGroupsOptions,
  facultyDefaultData,
  gendersOptions,
  TResponse,
} from "../../../constant/global";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import PHDatePicker from "../../../components/form/PHDatePicker";
import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagementApi";
import { useGetAllcademicDepertmentQuery } from "../../../redux/features/admin/academicDepertmentApi";
import { useAddFacultyMutation } from "../../../redux/features/admin/userManagementApi";
import { toast } from "sonner";

const CreateFaculty = () => {
  const [addFaculty] = useAddFacultyMutation();
  const { data: sData, isLoading: sisLoading } =
    useGetAllSemesterQuery(undefined);

  const { data: dData, isLoading: disLoading } =
    useGetAllcademicDepertmentQuery(undefined, { skip: sisLoading });

  const semesterOptions = sData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const depertmentOptions = dData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name}`,
  }));

  // console.log("sData: ", sData);
  // console.log("dData: ", dData?.data?._id);

  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    const facultyData = {
      password: "faculty123",
      faculty: data,
    };
    console.log(facultyData);
    const formData = new FormData();

    formData.append("data", JSON.stringify(facultyData));
    formData.append("file", data.profileImg);

    console.log(
      "FormData with faculty and file: ",
      Object.fromEntries(formData)
    );
    // console.log("Selected file: ", data.profileImg);

    // addFaculty(formData);

    try {
      const res = (await addFaculty(formData)) as TResponse<any>;
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
  };
  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onsubmit} defaultValues={facultyDefaultData}>
          <Row gutter={8}>
            <Divider>Personal Info</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="user" label="UserId"></PHInput>
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="name.firstName"
                label="firstName"
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
              <PHInput
                type="text"
                name="designation"
                label="Designation"
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
            {/* <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}> */}
            {/* <Controller
                name="profileImg"
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item label="Image Upload">
                    <Input
                      type="file"
                      value={value?.fileName}
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                    ></Input>
                  </Form.Item>
                )}
              ></Controller> */}
            {/* </Col> */}
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              {/* <PHDatePicker
                name="dateOfBirth"
                label="DateOfBirth"
              ></PHDatePicker> */}
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <p>Profile image</p>
              {/* <Controller
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
              /> */}
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

            <Divider>Academic Info</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name="academicDepartment"
                label="AcademicDepartment"
                options={depertmentOptions}
                // disabled={disLoading}
              ></PHSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name="admissionSemester"
                label="AdmissionSemester"
                options={semesterOptions}
                // disabled={sisLoading}
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

export default CreateFaculty;
