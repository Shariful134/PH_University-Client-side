import { FieldValues, SubmitHandler } from "react-hook-form";

import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { nameOptions } from "../../../constant/semester";
import { monthOptions, TResponseError } from "../../../constant/global";
import { academicSemesterShema } from "../../../shemas/academicManagement";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagementApi";
import { toast } from "sonner";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4, 5].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));
//

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();
  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    const name = nameOptions[Number(data?.name) - 1]?.label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    try {
      const res = (await addAcademicSemester(semesterData)) as TResponseError;
      if (res.error) {
        toast.error(res.error.data.message);
      } else {
        toast.success("Semester Created SucceccFully!");
      }
      console.log("res:", res);
    } catch (error) {
      console.log(error);
      // toast.error("Somthing went wrong!");
    }
  };

  return (
    <Flex justify="center" align="middle">
      <Col span={6}>
        <PHForm
          resolver={zodResolver(academicSemesterShema)}
          onSubmit={onsubmit}
        >
          <PHSelect label="Name" name="name" options={nameOptions}></PHSelect>
          <PHSelect label="Year" name="year" options={yearOptions}></PHSelect>
          <PHSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          ></PHSelect>
          <PHSelect
            label="End Month"
            name="endMonth"
            options={monthOptions}
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
