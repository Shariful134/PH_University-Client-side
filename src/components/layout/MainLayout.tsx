// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";

import { Layout } from "antd";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

// import { createElement } from "react";

const { Header, Content, Footer } = Layout;

// const items: MenuProps["items"] = [
//   {
//     key: "Dashboard",
//     label: <NavLink to={"/admin/dashboard"}>Dashboard</NavLink>,
//   },
//   {
//     key: "User Manegement",
//     label: "User Manegement",
//     children: [
//       {
//         key: "create admin",
//         label: <NavLink to={"/admin/create-admin"}>Create Admin</NavLink>,
//       },
//       {
//         key: "create student",
//         label: <NavLink to={"/admin/create-student"}>Create Student</NavLink>,
//       },
//       {
//         key: "create faculty",
//         label: <NavLink to={"/admin/create-faculty"}>Create Faculty</NavLink>,
//       },
//     ],
//   },
// ];
const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar></Sidebar>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
