import { Table, TableProps } from "antd";
import { useGetAllcademicDepertmentQuery } from "../../../redux/features/admin/academicDepertmentApi";
import { TDepertmentData } from "../../../type/type";
import { DataType } from "./academicSemester";

const AcademicDepertment: React.FC = () => {
  const {
    data: depertmentData,
    isLoading,
    isError,
  } = useGetAllcademicDepertmentQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }
  const allDepertmentData = depertmentData.data;
  console.log("allDepertmentData: ", allDepertmentData);
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Depertment Name",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },
  ];

  const data: DataType[] = allDepertmentData.map(
    (depertmentData: TDepertmentData, index: number) => ({
      key: index.toString(),
      name: depertmentData.name,
    })
  );
  return (
    <div>
      <div>
        <Table<DataType>
          columns={columns}
          dataSource={data}
          bordered
          // title={() => "Header"}
          // footer={() => "Footer"}
        />
      </div>
    </div>
  );
};

export default AcademicDepertment;
