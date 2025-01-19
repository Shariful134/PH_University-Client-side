import { Menu } from "antd";

import { sidebarGenerator } from "../../utils/sidebarItemGenerate";
import { adminPaths } from "../../routes/admin.routes";
import Sider from "antd/es/layout/Sider";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const userRole = {
  ADMIN: "admin",
  STUDENT: "student",
  FACULTY: "faculty",
};

const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);
  let sidebarItems;
  switch (user!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarGenerator(adminPaths, "admin");
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarGenerator(studentPaths, "student");
      break;

    case userRole.FACULTY:
      sidebarItems = sidebarGenerator(facultyPaths, "faculty");
      break;

    default:
      break;
  }
  return (
    <Sider
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div
        style={{
          height: "4rem",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH-Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
