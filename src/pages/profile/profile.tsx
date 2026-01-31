import { Form, Layout, Menu } from "antd";
import {
  UserOutlined,
  ShoppingOutlined,
  EnvironmentOutlined,
  HeartOutlined,
  OrderedListOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import AccountDetails from "./profileChildren/form";

const { Sider, Content } = Layout;

type ActiveType =
  | "Account Details"
  | "My Products"
  | "Address"
  | "Wishlist"
  | "Track Order"
  | "Log out";

const Profile = () => {
  const [active, setActive] = useState<ActiveType>("Account Details");

  const menuItems: {
    key: ActiveType;
    label: string;
    icon: React.ReactNode;
    danger?: boolean;
  }[] = [
    { key: "Account Details", label: "Account Details", icon: <UserOutlined style={{fontSize:"18px"}} /> },
    { key: "My Products", label: "My Products", icon: <ShoppingOutlined style={{fontSize:"18px"}} /> },
    { key: "Address", label: "Address", icon: <EnvironmentOutlined style={{fontSize:"18px"}} /> },
    { key: "Wishlist", label: "Wishlist", icon: <HeartOutlined  style={{fontSize:"18px"}}/> },
    { key: "Track Order", label: "Track Order", icon: <OrderedListOutlined style={{fontSize:"18px"}} /> },
    { key: "Log out", label: "Log out", icon: <LogoutOutlined style={{fontSize:"18px"}} />, danger: true },
  ];

  const getItemStyle = (key: ActiveType, danger?: boolean) => ({
    color: danger
      ? "red"
      : active === key
      ? "#46A358"
      : "",
    backgroundColor:
      active === key
        ? danger
          ? "#ffe5e5"
          : "#e7f3ea"
        : "",
    borderLeft:
      active === key
        ? `4px solid ${danger ? "red" : "#46A358"}`
        : "4px solid transparent",
    borderRadius: "4px",
    margin: "4px 8px",
  });

  const renderContent = () => {
    switch (active) {
      case "Account Details":
        return <AccountDetails />;
      case "My Products":
        return <div>List of your products...</div>;
      case "Address":
        return <div>Your saved addresses...</div>;
      case "Wishlist":
        return <div>Your wishlist items...</div>;
      case "Track Order":
        return <div>Track your orders here...</div>;
      case "Log out":
        return <div>Are you sure you want to log out?</div>;
      default:
        return null;
    }
  };
  

  return (
    <div className="my-10">
      <Layout>
        {/* Sidebar */}
        <Sider width={280}>
          <Menu mode="inline" style={{ height: "100%", fontSize: "1rem",borderRight:"none" }}>
            {menuItems.map((item) => (
              <Menu.Item
                key={item.key}
                icon={<span style={{ fontSize: "20px" }}>{item.icon}</span>}
                style={getItemStyle(item.key, item.danger)}
                onClick={() => setActive(item.key)}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>

        {/* Content */}
        <Layout>
          <Content
          style={{  background: "#ffffff",
            padding:"5px 2rem",
            border: "none",
            boxShadow: "none",}}
          >
            {renderContent()}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Profile;
