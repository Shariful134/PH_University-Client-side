import React from "react";
import { Table } from "antd";
import type { TableProps } from "antd";
import { useGetAllcademicFacultyQuery } from "../../../redux/features/admin/academicFacultyApi";
import { TFaculty } from "../../../type/type";

interface DataType {
  key: string;
  name: string;
}

const AcademicFaculty: React.FC = () => {
  const {
    data: facultyData,
    isLoading,
    isError,
  } = useGetAllcademicFacultyQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }
  const allFacultyData = facultyData.data;
  console.log("facultyData: ", allFacultyData);
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Faculty Name",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },
  ];
  const data: DataType[] = allFacultyData.map(
    (faculty: TFaculty, index: number) => ({
      key: index.toString(),
      name: faculty.name,
    })
  );

  return (
    <div>
      <Table<DataType>
        columns={columns}
        dataSource={data}
        bordered
        // title={() => "Header"}
        // footer={() => "Footer"}
      />
    </div>
  );
};

export default AcademicFaculty;

// const AcademicFaculty = () => {
//   const {
//     data: facultyData,
//     isLoading,
//     isError,
//   } = useGetAllcademicFacultyQuery(undefined);
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error loading data</div>;
//   }
//   const allFacultyData = facultyData.data;
//   console.log(allFacultyData);
//   return (
//     <div>
//       <h2>Faculty Name</h2>
//       <ul>
//         {allFacultyData?.map((faculty, index) => (
//           <p>
//             {index + 1} {faculty.name}
//           </p>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AcademicFaculty;
