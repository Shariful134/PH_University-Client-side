import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { zodResolver } from "@hookform/resolvers/zod";
import PHSelect from "../../../components/form/PHSelect";
import { facultyOptions } from "../../../constant/faculty";
import { facultyShema } from "../../../shemas/facultyManagement";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicFacultyApi";
import { toast } from "sonner";
import { TAcademicSemester, TResponse } from "../../../constant/global";

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();
  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);

    const facultyData = {
      name: data.name,
    };
    console.log(facultyData);
    try {
      const res = (await addAcademicFaculty(
        facultyData
      )) as TResponse<TAcademicSemester>;
      if (res.error) {
        toast.error(res.error.data.message);
      } else {
        toast.success("Faculty Created SucceccFully!");
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
        <PHForm resolver={zodResolver(facultyShema)} onSubmit={onsubmit}>
          <PHSelect
            label="Name"
            name="name"
            options={facultyOptions}
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
