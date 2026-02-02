import { Layout, Menu, Modal } from "antd";
import {
  UserOutlined,
  ShoppingOutlined,
  EnvironmentOutlined,
  HeartOutlined,
  OrderedListOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useReduxDispatch } from "../../hook/useRedux/useredux";
import { setLogout } from "../../redux/auth-slice";
import { useNavigate } from "react-router-dom";
import { clearLocalStorage } from "../../redux/shop-slice";
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
  const [isOpenModal, setIsModalOpen] = useState<boolean>(false);
  const dispatch =useReduxDispatch()
  const navigate =useNavigate()

  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(setLogout())
    navigate("/")
    dispatch(clearLocalStorage())
    
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const menuItems: {
    key: ActiveType;
    label: string;
    icon: React.ReactNode;
    danger?: boolean;
  }[] = [
    {
      key: "Account Details",
      label: "Account Details",
      icon: <UserOutlined style={{ fontSize: "18px" }} />,
    },
    {
      key: "My Products",
      label: "My Products",
      icon: <ShoppingOutlined style={{ fontSize: "18px" }} />,
    },
    {
      key: "Address",
      label: "Address",
      icon: <EnvironmentOutlined style={{ fontSize: "18px" }} />,
    },
    {
      key: "Wishlist",
      label: "Wishlist",
      icon: <HeartOutlined style={{ fontSize: "18px" }} />,
    },
    {
      key: "Track Order",
      label: "Track Order",
      icon: <OrderedListOutlined style={{ fontSize: "18px" }} />,
    },
    {
      key: "Log out",
      label: "Log out",
      icon: <LogoutOutlined style={{ fontSize: "18px" }} />,
      danger: true,
    },
  ];

  const getItemStyle = (key: ActiveType, danger?: boolean) => ({
    color: danger ? "red" : active === key ? "#46A358" : "",
    backgroundColor: active === key ? (danger ? "#ffe5e5" : "#e7f3ea") : "",
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
        return <div>..... coming soon</div>;
      case "Address":
        return <div>Your saved addresses...</div>;
      case "Wishlist":
        return <div>Your wishlist items...</div>;
      case "Track Order":
        return <div>Track your orders here...</div>;
      case "Log out":
        return (
          <>
            {setIsModalOpen(true)}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="my-10">
      <Layout>
        {/* Sidebar */}
        <Sider width={280}>
          <Menu
            mode="inline"
            style={{ height: "100%", fontSize: "1rem", borderRight: "none" }}
          >
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
            style={{
              background: "#ffffff",
              padding: "5px 2rem",
              border: "none",
              boxShadow: "none",
            }}
          >
            <Modal
              title="Confirm Log out"
              open={isOpenModal}
              onOk={handleOk
              }
              onCancel={handleCancel}
              okText="Yes, Log out" 
              cancelText="Cancel"
              okButtonProps={{ style: { backgroundColor: "red", borderColor: "red" }}}
            >
              <p>Are you sure you want to log out?</p>
            </Modal>
            {renderContent()}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Profile;
