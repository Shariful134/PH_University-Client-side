import { FieldValues, SubmitHandler } from "react-hook-form";

import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";

const nameOptions = [
  {
    value: "01",
    label: "Autumn",
  },
  {
    value: "02",
    label: "Summer",
  },
  {
    value: "03",
    label: "Fall",
  },
];

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4, 5].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("data: ", data);
    const name = nameOptions[Number(data.name) - 1].label;
    const semesterData = {
      name,
      code: "somthing",
      year: data.year,
    };
    console.log(semesterData);
  };
  return (
    <Flex justify="center" align="middle">
      <Col span={6}>
        <PHForm onSubmit={onsubmit}>
          <PHSelect label="Name" name="name" options={nameOptions}></PHSelect>
          <PHSelect label="Year" name="year" options={yearOptions}></PHSelect>
          <PHSelect
            label="Start Month"
            name="startMonth"
            options={nameOptions}
          ></PHSelect>
          <PHSelect
            label="End Month"
            name="endMonth"
            options={nameOptions}
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
