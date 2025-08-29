import React from "react";
import {
  DashboardOutlined,
  BookOutlined,
  CalendarOutlined,
  FileTextOutlined,
  MessageOutlined,
  DownloadOutlined,
  TeamOutlined,
  SettingOutlined,
  SearchOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Input } from "antd";
import logo from "../assests/logo.svg";
import profile from "../assests/profile.svg";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const LayoutComponents = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        width={240}
        style={{ background: "#F9F9F9" }}
      >
        <div className="flex items-center justify-center p-3">
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <img src={logo} alt="logo"></img>
          </div>
        </div>

        <Menu mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item
            key="1"
            icon={<DashboardOutlined />}
            onClick={() => navigate("/")}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<BookOutlined />}
            onClick={() => navigate("/assignments")}
          >
            Assignments
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<CalendarOutlined />}
            onClick={() => navigate("/schedule")}
          >
            Schedule
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<CalendarOutlined />}
            onClick={() => navigate("/recordings")}
          >
            Recordings
          </Menu.Item>
          <Menu.Item key="5" icon={<FileTextOutlined />}>
            Notes
          </Menu.Item>
          <Menu.Item key="6" icon={<MessageOutlined />}>
            Discussions
          </Menu.Item>
          <Menu.Item key="7" icon={<DownloadOutlined />}>
            Downloads
          </Menu.Item>
          <Menu.Item key="8" icon={<TeamOutlined />}>
            Classes
          </Menu.Item>
          <Menu.Item key="9" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: "0 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search..."
            className="w-[300px] border-[0.93px] border-[#0063F8] rounded-md"
          />

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <BellOutlined style={{ fontSize: "20px" }} />
            <img src={profile} alt="profile" />
          </div>
        </Header>
        <div className="border-b border-[#E4E4E4]"></div>

        <Content style={{ padding: "24px", background: "#fff" }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponents;
