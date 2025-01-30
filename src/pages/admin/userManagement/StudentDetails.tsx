import { useParams } from "react-router";

const StudentDetails = () => {
  const { studentId } = useParams();
  return <div>this sisjhDetails : {studentId}</div>;
};

export default StudentDetails;
