import { Button, Form, Input, Radio, Space } from "antd"
const {TextArea} =Input 
import PaymentImage from "../../assets/images/payment.png"
import Cookies from "js-cookie";
import { useReduxSelector } from "../../hook/useRedux/useredux";
import { useMakeOrder } from "../../hook/useQuery/useQueryAction";



const CheckoutFrom = () => {
    const user =Cookies.get("user")
    const userInfo =user ? JSON.parse(user) :{};

    const shop =localStorage.getItem("shop")
    const shopItems =shop ? JSON.parse(shop) :[];
    
    
    const {data, coupon} =useReduxSelector((state) => state.shopSlice);
    const totalPrice =data.reduce((total, value) =>(total +=value.userPrice),0);
    const totalWithCoupon:number =+(totalPrice-(totalPrice *(coupon/100))+16).toFixed(2) || 0;
    
    const{mutate:setOrders} =useMakeOrder()

  return (
    
    
    <Form  onFinish={(values) =>{
        const { name, surname, payment } = values;

        const oderData ={
            shop_list:shopItems,
            billing_address:{
                name,
                surname,
            },
            extra_shop_info:{
                total:totalWithCoupon,
                method:payment
            }
        }

        setOrders(oderData)

    }}
    initialValues={{
        surname: userInfo.surname || "",
        name: userInfo.name || "",
        email: userInfo.email || "",
        phone_number: userInfo.phone_number || "",
        prefix: "+998",
        username: userInfo.username || "",
        profile_photo: userInfo.profile_photo || "",
        country: userInfo.billing_address?.country || "",
        town: userInfo.billing_address?.town || "",
        street_address: userInfo.billing_address?.street_address || "",
        extra_address: userInfo.billing_address?.extra_address || "",
        state: userInfo.billing_address?.state || "",
        zip: userInfo.billing_address?.zip || "",
      }}
    
      
    
      /* 
      {"_id":"696f74194e001e27be6c261f","name":"Azamat","surname":"tuychiboyevy","password":"********","username":"Azamatt","permission":{"create":false,"update":false,"delete":false,"read":true},"email":"tuychiboyev@gmail.com","profile_photo":"https://www.bing.com/th/id/OIP.OgCrXDryU834lh8PrbOqXwHaC0?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2","followers":[],"billing_address":{"country":"","town":"","street_address":"","extra_address":"","state":"","zip":""},"user_type":"observer","create_post_limit":0,"create_account_limit":0,"create_plant_limit":0,"hashtags":[],"wishlist":[],"created_by":"64eecf3b54abde61153d1fd3","order_list":[],"phone_number":"789","created_at":"2026-01-20T12:24:57.629Z","__v":0}
    
    
    
      */
      style={{ rowGap: "0px", fontSize:"12px" }} // vertical spacingni kichraytiradi
      layout="vertical"
      className="grid grid-cols-2 gap-8"
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
        label="Country/ Region"
        name="country"
        rules={[{ required: true, message: "Please enter Lastname" }]}
      >
        <Input style={{ borderColor: "green" }} placeholder="Enter Lastname" />
      </Form.Item>
    
    
      <Form.Item
        label="Town/ City"
        name="town"
        rules={[{ required: true, message: "Please enter Lastname" }]}
      >
        <Input style={{ borderColor: "green" }} placeholder="Enter Lastname" />
      </Form.Item>
    
    
    
    
      <Form.Item
        label="Street address/ City"
        name="street_address"
        rules={[{ required: true, message: "Please enter Lastname" }]}
      >
        <Input style={{ borderColor: "green" }} placeholder="Enter Lastname" />
      </Form.Item>
    
    
    
      <Form.Item
        label="Enter your apartment"
        name="extra_address"
        rules={[{ required: true, message: "Please enter Lastname" }]}
      >
        <Input style={{ borderColor: "green" }} placeholder="Enter Lastname" />
      </Form.Item>
    
    
    
      <Form.Item
        label="State"
        name="state"
        rules={[{ required: true, message: "Please enter Lastname" }]}
      >
        <Input style={{ borderColor: "green" }} placeholder="Enter Lastname" />
      </Form.Item>
    
    
    
    
      <Form.Item
        label="Zip"
        name="zip"
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
          <Input style={{ width: "20%" }} />
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
    
    
      <Form.Item
        label="Image"
        name="payment"
        rules={[{ required: true, message: "Please insert the image link" }]}
      >
        <Radio.Group style={{width:"100%"}}>
            <Radio  
              value="cards"
              
              style={{ display: "flex" ,alignItems: "center" , gap: "0.5rem", border: "1px solid green", padding: "0.5rem", borderRadius: "5px" }}
            >
              <img src={PaymentImage} alt="" />
            </Radio>
    
            <Radio
              value="bank"
              style={{ display: "flex" ,alignItems:"center" , border: "1px solid green", padding: "0.5rem", borderRadius: "5px", marginTop: 8 }}
            >
              Direct bank transfer
            </Radio>
    
            <Radio
              value="cod"
              style={{ display: "flex" ,alignItems:"center" , border: "1px solid green", padding: "0.5rem", borderRadius: "5px", marginTop: 8 }}
            >
              Cash on delivery
            </Radio>
          </Radio.Group>
      </Form.Item>
    
    
      <Form.Item  className="col-span-2!"
        label="Comment"
        name="comment"
        rules={[{ required: true, message: "Please enter Email" }]}
      >
        <TextArea  rows={6} style={{ borderColor: "green" }} placeholder="Enter Email" />
      </Form.Item>
    
     
      
      <Button className="col-span-2! py-5!" htmlType="submit" style={{ width: "100%", backgroundColor:"#46A358", color:"white", borderColor:"#46A358" }}>
        Submit
      </Button>
    </Form>
  )
}

export default CheckoutFrom