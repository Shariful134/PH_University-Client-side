import { Button, Modal, Pagination, Space, Table } from "antd";
import type { TableProps } from "antd";
import { useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement";
import { useState } from "react";
import ModalCourses from "./ModalCourses";

interface DataType {
  key: string;
  title: string;
  code: number;
}

type TCourseData = {
  _id: string;
  key: string;
  title: string;
  code: number;
};
const Courses = () => {
  const [page, setPage] = useState(1);
  const { data: Coursesdata } = useGetAllCoursesQuery([
    { name: "limit", value: 3 },
    { name: "sort", value: "code" },
    { name: "page", value: page },
  ]);
  const metaData = Coursesdata?.meta;
  console.log(metaData);

  const data: DataType[] = Coursesdata?.data?.map((item: TCourseData) => ({
    key: item._id,
    title: item.title,
    code: item.code,
  }));

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },

    {
      title: "Action",
      key: "action",
      render: (item) => (
        <Space size="middle">
          {/* <Button>Assign Faculty</Button> */}
          <ModalCourses facultyInfo={item}></ModalCourses>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table<DataType> columns={columns} dataSource={data} pagination={false} />
      <Pagination
        current={page}
        pageSize={metaData?.limit}
        onChange={(value) => setPage(value)}
        total={metaData?.total}
      ></Pagination>
    </div>
  );
};

export default Courses;
