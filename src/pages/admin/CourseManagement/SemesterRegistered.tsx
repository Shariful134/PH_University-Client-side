import { Button, Col, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagementApi";
import PHForm from "../../../components/form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { statusOptions } from "../../../type/semester";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHInput from "../../../components/form/PHInput";
import { toast } from "sonner";
import { TResponse } from "../../../constant/global";
import { useAddRegisteredSemesterMutation } from "../../../redux/features/admin/courseManagement";

const SemesterRegistered = () => {
  const { data: semesterData } = useGetAllSemesterQuery([
    { name: "sort", value: "year" },
  ]);

  const semesterOptions = semesterData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));
  console.log(semesterOptions);
  const [addRegisteredSemestered] = useAddRegisteredSemesterMutation();

  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    const semesterData = {
      ...data,
      minCredit: Number(data?.minCredit),
      maxCredit: Number(data?.maxCredit),
    };
    console.log(semesterData);
    try {
      const res = (await addRegisteredSemestered(
        semesterData
      )) as TResponse<any>;
      if (res?.error) {
        toast.error(res.error.data.message);
      } else {
        toast.success("Semester Registered Successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onsubmit}>
          <Row>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                label="AcademicSemester"
                name="academicSemester"
                options={semesterOptions}
              ></PHSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                label="Status"
                name="status"
                options={statusOptions}
              ></PHSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHDatePicker label="StartDate" name="startDate"></PHDatePicker>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHDatePicker label="EndDate" name="endDate"></PHDatePicker>
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="number"
                label="MaxCredit"
                name="maxCredit"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="number"
                label="MinCredit"
                name="minCredit"
              ></PHInput>
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default SemesterRegistered;
