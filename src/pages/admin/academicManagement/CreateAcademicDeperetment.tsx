import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { zodResolver } from "@hookform/resolvers/zod";
import PHSelect from "../../../components/form/PHSelect";

import { depertmentShema } from "../../../shemas/facultyManagement";
import { FieldValues, SubmitHandler } from "react-hook-form";

// import { toast } from "sonner";
// import { TAcademicSemester, TResponse } from "../../../constant/global";

import { useGetAllcademicFacultyQuery } from "../../../redux/features/admin/academicFacultyApi";
import { TDepertment, TFaculty } from "../../../type/type";
import { toast } from "sonner";
import { useAddAcademicDepertmentMutation } from "../../../redux/features/admin/academicDepertmentApi";
import { TAcademicSemester, TResponse } from "../../../constant/global";
import { facultyOptions } from "../../../constant/faculty";

const CreateAcademicDeperetment = () => {
  const { data: facultyData } = useGetAllcademicFacultyQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  const [addAcademicDepertment] = useAddAcademicDepertmentMutation();
  const allFacultyData = facultyData?.data;
  const allFaculty = allFacultyData?.map((faculty: TFaculty) => ({
    value: faculty._id,
    label: faculty.name,
  }));
  // console.log(allFaculty);

  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    const selectFaculty = allFaculty.find(
      (depertment: TDepertment) => depertment.value === data.name
    );
    console.log("selectFaculty: ", selectFaculty);

    const selectDepertment = facultyOptions.find(
      (depertmentName) => depertmentName.label === selectFaculty.label
    );
    const depertmentData = {
      name: selectDepertment.name,
      academicFaculty: data.name,
    };
    console.log("depertmentData: ", depertmentData);
    try {
      const res = (await addAcademicDepertment(
        depertmentData
      )) as TResponse<TAcademicSemester>;
      if (res.error) {
        toast.error(res.error.data.message);
      } else {
        toast.success("Depertment Created SucceccFully!");
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
        <PHForm resolver={zodResolver(depertmentShema)} onSubmit={onsubmit}>
          <PHSelect label="Name" name="name" options={allFaculty}></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicDeperetment;
