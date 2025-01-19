// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";

import { Button, Layout } from "antd";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import { useAppDispath } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

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
  const dispatch = useAppDispath();

  const handlLogOut = () => {
    dispatch(logout());
  };
  return (
    <Layout style={{ height: "100%" }}>
      <Sidebar></Sidebar>
      <Layout>
        <Header
          style={{ padding: "0", position: "sticky", top: "0", left: "0" }}
        >
          <Button onClick={handlLogOut}>LogOut</Button>
        </Header>
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
