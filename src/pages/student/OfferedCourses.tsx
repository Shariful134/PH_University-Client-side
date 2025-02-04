/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Row } from "antd";
import {
  useCreateEnrolledCourseMutation,
  useGetAllStudentCourseseQuery,
} from "../../redux/features/student/studentCourseApi";
import { TResponse } from "../../constant/global";
import { toast } from "sonner";

const OfferedCourses = () => {
  const [addEnrolledCourse] = useCreateEnrolledCourseMutation();
  const { data: offeredCourseData } = useGetAllStudentCourseseQuery(undefined);
  console.log(offeredCourseData);
  const singleObject = offeredCourseData?.data?.reduce((accu, item) => {
    const key = item.course.title;
    accu[key] = accu[key] || { courseTitle: key, section: [] };
    accu[key].section.push({
      section: item.section,
      _id: item._id,
      days: item.days,
      startTime: item.startTime,
      endTime: item.endTime,
    });
    return accu;
  }, {});

  const modifiedData = Object.values(singleObject ? singleObject : {});
  console.log(modifiedData);

  if (modifiedData.length === 0) {
    return <p>Unavailable Data</p>;
  }

  const handleEnroll = async (id: any) => {
    const enrolledData = {
      offeredCourse: id,
    };
    try {
      const res = (await addEnrolledCourse(enrolledData)) as TResponse<any>;
      if (res?.error) {
        toast.error(res.error.data.message);
      } else {
        toast(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Row>
      {modifiedData?.map((item) => {
        return (
          <Col
            style={{
              padding: "5px",

              border: "2px solid",

              boxShadow: "2px 4px 8px  rgba(22, 22, 22, 0.15)",
            }}
            span={24}
          >
            <div>
              <h3>{item.courseTitle}</h3>
            </div>
            <div>
              {item.section.map((section) => {
                return (
                  <Row justify={"space-between"} align={"middle"}>
                    <Col span={5}>Section: {section.section}</Col>
                    <Col span={5}>
                      Days:{" "}
                      {section.days.map((day) => (
                        <span>{day}</span>
                      ))}
                    </Col>
                    <Col span={5}>StartTime: {section.startTime}</Col>
                    <Col span={5}>EndTime: {section.endTime}</Col>
                    <Button onClick={() => handleEnroll(section._id)}>
                      Enroll
                    </Button>
                  </Row>
                );
              })}
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default OfferedCourses;
