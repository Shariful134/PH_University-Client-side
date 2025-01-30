import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagementApi";
import { TAcademicSemester, TqueryParams } from "../../../constant/global";
import { useState } from "react";

export type DataType = Pick<
  TAcademicSemester,
  "name" | "year" | "startMonth" | "endMonth"
>;

const AcademicSemester = () => {
  const [params, setParams] = useState<TqueryParams[] | undefined>(undefined);

  const {
    data: semesterData,
    isLoading,
    isFetching,
  } = useGetAllSemesterQuery(params);
  console.log({ isLoading, isFetching });
  // const { data: semesterData } = useGetAllSemesterQuery([
  //   { name: "year", value: "2025" },
  // ]);
  const tableData = semesterData?.data?.map(
    ({ _id, name, year, startMonth, endMonth }) => ({
      key: _id,
      name,
      year,
      startMonth,
      endMonth,
    })
  );
  // console.log(semesterData);

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Fall",
          value: "Fall",
        },
        {
          text: "Summer",
          value: "Summer",
        },
      ],
      // // specify the condition of filtering result
      // // here is that finding the name started with `value`
      // onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      // sorter: (a, b) => a.name.length - b.name.length,
      // sortDirections: ["descend"],
    },
    {
      title: "Year",
      key: "year",
      dataIndex: "year",
      filters: [
        {
          text: "2024",
          value: "2024",
        },
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2026",
          value: "2026",
        },
        {
          text: "2027",
          value: "2027",
        },
        {
          text: "2028",
          value: "2028",
        },
        {
          text: "2029",
          value: "2029",
        },
        {
          text: "2030",
          value: "2030",
        },
      ],
      // defaultSortOrder: "descend",
      //   sorter: (a, b) => a.age - b.age,
    },
    // {
    // title: "Address",
    // dataIndex: "address",
    // filters: [
    //   {
    //     text: "London",
    //     value: "London",
    //   },
    //   {
    //     text: "New York",
    //     value: "New York",
    //   },
    // ],
    // onFilter: (value, record) =>
    //   record.address.indexOf(value as string) === 0,
    // },
    {
      title: "Start Month",
      key: "startMonth",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      key: "endMonth",
      dataIndex: "endMonth",
    },
    {
      title: "Action",
      key: "x",
      render: () => {
        return (
          <div>
            <Button
              style={{
                backgroundColor: "#E6E7EE",
                boxShadow: "2px 4px 8px  rgba(22, 22, 22, 0.15)",
              }}
            >
              Update
            </Button>
          </div>
        );
      },
    },
  ];

  // const data = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     age: 42,
  //     address: "London No. 1 Lake Park",
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park",
  //   },
  //   {
  //     key: "4",
  //     name: "Jim Red",
  //     age: 32,
  //     address: "London No. 2 Lake Park",
  //   },
  // ];

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
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

export default AcademicSemester;
