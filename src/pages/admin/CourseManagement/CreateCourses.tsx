import { Button, Col, Row } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import PHInput from "../../../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import {
  useAddCourseMutation,
  useGetAllCoursesQuery,
} from "../../../redux/features/admin/courseManagement";
import { toast } from "sonner";
import { TResponse } from "../../../constant/global";

const CreateCourses = () => {
  const [addCourse] = useAddCourseMutation();
  const { data: allCourses } = useGetAllCoursesQuery(undefined);

  const preRequisiteCoursesOptions = allCourses?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));
  console.log(allCourses);
  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    const courseData = {
      ...data,
      code: Number(data.code),
      credits: Number(data.credits),
      isDeleted: false,
      preRequisiteCourses: data.preRequisiteCourses
        ? data.preRequisiteCourses?.map((item) => ({
            course: item,
            isDeleted: false,
          }))
        : [],
    };
    console.log(courseData);
    try {
      const res = (await addCourse(courseData)) as TResponse<any>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message);
      } else {
        toast.success("Course Created SuccessFully!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onsubmit}>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput name="title" label="Title" type="text"></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput name="prefix" label="Prefix" type="text"></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput name="code" label="Code" type="text"></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput name="credits" label="Credits" type="text"></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                mode="multiple"
                options={preRequisiteCoursesOptions}
                name="preRequisiteCourses"
                label="PreRequisiteCourses"
              ></PHSelect>
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateCourses;
