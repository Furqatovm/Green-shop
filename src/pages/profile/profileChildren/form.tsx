import { Button, Form, Input, Space } from "antd"
import Cookies from "js-cookie";
import { useChangeAccountDetails } from "../../../hook/useQuery/useQueryAction";


const AccountDetails = () => {
    const userInfo =JSON.parse(Cookies.get("user") as string)
    
    const {mutate: changeDetails} =useChangeAccountDetails()
  return (
    <Form 
  initialValues={{
    surname: userInfo.surname,
    name: userInfo.name,
    email: userInfo.email,
    phone: userInfo.phone_number,
    username: userInfo.username,
    profile_photo:userInfo.profile_photo
  }}
  
  layout="vertical"
  className="grid grid-cols-2 gap-8"
  onFinish={(values) =>changeDetails({...values, _id:userInfo._id})}
>
  <Form.Item
    label="Firstname"
    name="surname"
    rules={[{ required: true, message: "Please enter Firstname" }]}
  >
    <Input style={{ borderColor: "green" }} placeholder="Enter Firstname" />
  </Form.Item>

  <Form.Item
    label="Lastname"
    name="name"
    rules={[{ required: true, message: "Please enter Lastname" }]}
  >
    <Input style={{ borderColor: "green" }} placeholder="Enter Lastname" />
  </Form.Item>

  <Form.Item
    label="Email"
    name="email"
    rules={[{ required: true, message: "Please enter Email" }]}
  >
    <Input style={{ borderColor: "green" }} placeholder="Enter Email" />
  </Form.Item>

  <Form.Item
  label="Phone Number"
  required
>
  <Space.Compact>
    <Form.Item name="prefix" noStyle initialValue="+998">
      <Input style={{ width: "20%" }} />
    </Form.Item>
    <Form.Item
      name="phone_number"
      noStyle
      rules={[{ required: true, message: "Please enter Phone Number" }]}
    >
      <Input style={{ width: "80%" }} placeholder="Enter phone number" />
    </Form.Item>
  </Space.Compact>
</Form.Item>


  <Form.Item
    label="UserName"
    name="username"
    rules={[{ required: true, message: "Please enter UserName" }]}
  >
    <Input style={{ borderColor: "green" }} placeholder="Enter Username" />
  </Form.Item>

  <Form.Item
    label="Image"
    name="profile_photo"
    rules={[{ required: true, message: "Please insert the image link" }]}
  >
    <Input type={"text"} />
  </Form.Item>

  <Button htmlType="submit" style={{ width: "100%", backgroundColor:"#46A358", color:"white", borderColor:"#46A358" }}>
    Submit
  </Button>
</Form>

  )
}

export default AccountDetails