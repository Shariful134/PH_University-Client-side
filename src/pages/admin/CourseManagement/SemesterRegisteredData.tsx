import { Button, Dropdown, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import {
  useGetAllRegisteredSemesterQuery,
  useUpdateRegisteredSemesterMutation,
} from "../../../redux/features/admin/courseManagement";
import moment from "moment";
import { useState } from "react";

const items = [
  {
    label: "upcoming",
    key: "UPCOMING",
  },
  {
    label: "ongoing",
    key: "ONGOING",
  },
  {
    label: "ended",
    key: "ENDED",
  },
];

interface DataType {
  key: string;
  academicSemester: string;
  startDate: string;
  endDate: string;
  status: string;
}

const SemesterRegisteredData = () => {
  const [updateStatus] = useUpdateRegisteredSemesterMutation();
  const [semesterId, setSemesterId] = useState("");
  console.log(semesterId);
  const { data: semesterData } = useGetAllRegisteredSemesterQuery(undefined);

  console.log(semesterData);
  const data: DataType[] = semesterData?.data?.map((item) => ({
    key: item._id,
    academicSemester: `${item.academicSemester.name} ${item.academicSemester.year}`,
    startDate: moment(new Date(item.startDate)).format("MMMM"),
    endDate: moment(new Date(item.endDate)).format("MMMM"),
    status: item.status,
  }));

  const handleStatusUpdate = (data) => {
    console.log(data.key);
    console.log(semesterId);

    const updateData = {
      id: semesterId,
      data: {
        status: data.key,
      },
    };
    updateStatus(updateData);
  };
  const menuProps = {
    items,
    onClick: handleStatusUpdate,
  };
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "academicSemester",
      key: "AcademicSemester",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Status",
      key: "Status",
      dataIndex: "status",
      render: (item) => {
        let color;
        if (item === "UPCOMING") {
          color = "blue";
        }
        if (item === "ONGOING") {
          color = "red";
        }
        if (item === "ENDED") {
          color = "green";
        }
        return <Tag color={color}>{item}</Tag>;
      },
    },
    {
      title: "StartMonth",
      dataIndex: "startDate",
      key: "StartDate",
    },
    {
      title: "EndMonth",
      key: "EndDate",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => (
        <Dropdown menu={menuProps} trigger={["click"]}>
          <Button onClick={() => setSemesterId(item.key)}>
            <Space>Button</Space>
          </Button>
        </Dropdown>
      ),
    },
  ];

  return <Table<DataType> columns={columns} dataSource={data} />;
};

export default SemesterRegisteredData;
