import {  Divider, Button, Avatar, Modal } from "antd";
import { useReduxDispatch, useReduxSelector } from '../../../hook/useRedux/useredux';
import { setProductCheckout } from '../../../redux/product-checkout';




const CheckOutModal = () => {
    const dispatch =useReduxDispatch();
    const {isOpen} =useReduxSelector((state) =>state.productCheckout)

    const orders =localStorage.getItem("orders");

    const orderItems = orders ? JSON.parse(orders): []
    console.log(orderItems)
    
      const shipping = 16;
      const total = orderItems?.extra_shop_info.total
  return (
    <Modal 
    centered
      open={isOpen}
      footer={false}
      onCancel={() => dispatch(setProductCheckout())}
    >
      <div style={{ maxWidth: 600, margin: "20px auto", borderRadius: 8 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap" }}>
        <div>
          <span style={{ fontWeight: "bold" }}>Order Number</span>
          <div>{orderItems._id}</div>
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>Date</span>
          <div>Sun Feb 01 2026</div>
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>Total</span>
          <div>${total}</div>
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>Payment Method</span>
          <div>{orderItems.extra_shop_info.method}</div>
        </div>
      </div>

      <Divider />

      {/* Order Details */}
      <h3>Order Details</h3>
      {orderItems.shop_list.map((item:any) => (
        <div key={item._id} style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
          <div style={{ flex: "0 0 50px" }}>
            <Avatar shape="square" src={item.img} size={50} />
          </div>
          <div style={{ flex: 1, marginLeft: 16 }}>
            <p style={{ fontWeight: "bold", margin: 0 }}>{item.title}</p>
            <span style={{ color: "gray" }}>SKU:{item._id}</span>
            <br />
          </div>
          <span style={{ color: "gray" }}>(x{item.counter})</span>

          <div style={{ flex: "0 0 80px", textAlign: "right" }}>
            <span style={{ fontWeight: "bold" }}>${item.userPrice}</span>
          </div>
        </div>
      ))}

      <Divider />

      {/* Shipping and Total */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <p>Shipping</p>
        <span style={{ fontWeight: "bold", color: "green" }}>${shipping}</span>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
        <p>Total</p>
        <span style={{ fontWeight: "bold", color: "green" }}>${total}</span>
      </div>

      <Divider />

      <p style={{ color: "gray" }}>
        Your order is currently being processed. You will receive an order confirmation email
        shortly with the expected delivery date for your items.
      </p>

      <Button type="primary" onClick={() => dispatch(setProductCheckout())} block style={{ marginTop: 20 }}>
        Track your order
      </Button>
    </div>
    </Modal>
  );
}

export default CheckOutModal;
