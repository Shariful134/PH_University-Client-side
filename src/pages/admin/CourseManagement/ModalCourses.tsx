/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal } from "antd";
import { useState } from "react";
import { useGetAllFacultyQuery } from "../../../redux/features/admin/userManagementApi";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { useAssignFacultiesMutation } from "../../../redux/features/admin/courseManagement";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { TResponse } from "../../../constant/global";
import { toast } from "sonner";

const ModalCourses = ({ facultyInfo }: any) => {
  const [assignFaculties] = useAssignFacultiesMutation();
  console.log(facultyInfo.key);

  const { data: facultyData } = useGetAllFacultyQuery(undefined);
  const facultyOptions = facultyData?.data?.map((item) => ({
    label: item.fullName,
    value: item._id,
  }));

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    const assignData = {
      courseId: facultyInfo?.key,
      data,
    };

    try {
      const res = (await assignFaculties(assignData)) as TResponse<any>;
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
    <>
      <Button onClick={showModal}>Assign Faculty</Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <PHForm onSubmit={onsubmit}>
          <PHSelect
            label="faculty"
            name="faculties"
            options={facultyOptions}
            mode="multiple"
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Modal>
    </>
  );
};

export default ModalCourses;
