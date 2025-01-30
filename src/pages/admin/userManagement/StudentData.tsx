import { Button, Pagination, Space, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

import { useState } from "react";
import { useGetAllStudentQuery } from "../../../redux/features/admin/userManagementApi";
import { TypeStudent } from "../../../type/studentsTypes";
import { TqueryParams } from "../../../constant/global";
import { Link } from "react-router";

export type DataType = Pick<
  TypeStudent,
  "fullName" | "id" | "email" | "contactNo" | "emergencyContactNo"
>;

const StudentData = () => {
  const [params, setParams] = useState<TqueryParams[]>([]);
  const [page, setPage] = useState(1);

  const {
    data: studentData,
    isLoading,
    isFetching,
  } = useGetAllStudentQuery([
    { name: "limit", value: 2 },
    { name: "sort", value: "id" },
    { name: "page", value: page },
    ...params,
  ]);
  console.log(isLoading);
  // const { data: semesterData } = useGetAllSemesterQuery([
  //   { name: "year", value: "2025" },
  // ]);
  const studentMetaData = studentData?.meta;
  console.log(studentMetaData);
  console.log(studentData);
  const tableData = studentData?.data?.map(
    ({ _id, fullName, id, emergencyContactNo, contactNo, email }) => ({
      key: _id,
      fullName,
      id,
      email,
      emergencyContactNo,
      contactNo,
    })
  );
  // console.log(semesterData);

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "fullName",
      //   showSorterTooltip: { target: "full-header" },

      // // specify the condition of filtering result
      // // here is that finding the name started with `value`
      // onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      // sorter: (a, b) => a.name.length - b.name.length,
      // sortDirections: ["descend"],
    },

    {
      title: "Rol No.",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Contact No.",
      key: "contactNo",
      dataIndex: "contactNo",
    },
    {
      title: "EmergencyContact No.",
      key: "emergencyContactNo",
      dataIndex: "emergencyContactNo",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        console.log(item);
        return (
          <Space>
            <Button
              style={{
                backgroundColor: "#E6E7EE",
                boxShadow: "2px 4px 8px  rgba(22, 22, 22, 0.15)",
              }}
            >
              Update
            </Button>
            <Link to={`/admin/students-data/${item.key}`}>
              <Button
                style={{
                  backgroundColor: "#E6E7EE",
                  boxShadow: "2px 4px 8px  rgba(22, 22, 22, 0.15)",
                }}
              >
                Details
              </Button>
            </Link>
            <Button
              style={{
                backgroundColor: "#E6E7EE",
                boxShadow: "2px 4px 8px  rgba(22, 22, 22, 0.15)",
              }}
            >
              Block
            </Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    console.log({ filters, extra });
    if (extra.action === "filter") {
      const queryParams: TqueryParams[] = [];
      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );
      setParams(queryParams);
      console.log("queryParams:", typeof queryParams[0].value);
    }
  };
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  return (
    <div>
      <Table<DataType>
        style={{ boxShadow: "2px 4px 8px  rgba(22, 22, 22, 0.15)" }}
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        pagination={false}
        showSorterTooltip={{ target: "sorter-icon" }}
      />

      <Pagination
        style={{ marginTop: "8px" }}
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={studentMetaData?.limit}
        total={studentMetaData?.total}
      />
    </div>
  );
};

export default StudentData;
