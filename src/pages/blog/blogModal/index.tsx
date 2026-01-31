import { Button, Form, Input, Modal } from "antd"
import { useReduxDispatch, useReduxSelector } from "../../../hook/useRedux/useredux"
import { setBlogAuthModal } from "../../../redux/blog-modal-slice"
import { ButtonStyle } from "../../../@types/@type"
import { useCreateBlog } from "../../../hook/useQuery/useQueryAction"


const {TextArea} =Input 


const BlogModal = () => {
    const { mutate: createBlog } = useCreateBlog();

  

    const dispatch =useReduxDispatch()
    const {isOpen} =useReduxSelector(state=> state.blogModalSlice)

  return (
    <Modal open={isOpen} footer={false} onCancel={() =>dispatch(setBlogAuthModal())}>
       
       <Form onFinish={(values:any) =>createBlog(values) } layout={"vertical"}>
        <Form.Item
        label="Please Enter the Title"  
        name="title"
        rules={[{ required: true, message: "Please enter the blog title" }]}
        >
            <Input style={{borderColor:"green"}} placeholder="Enter the title" type={"text"} />
        </Form.Item>
        <Form.Item 
         label="Please Enter the short description"  
         name="short_description"
         rules={[{ required: true, message: "Please enter the short description" }]}
        >

            <Input style={{borderColor:"green"}} placeholder="Enter the title" type={"text"} />
        
        </Form.Item>

        <Form.Item
        label="Please enter the content"  
        name="content"
        rules={[{ required: true, message: "Please enter the content" }]}
        >
            <TextArea style={{borderColor:"green"}} placeholder="Enter the title"  />
        </Form.Item>
        <Button htmlType="submit" style={{...ButtonStyle, width:"100%"}}>Submit</Button>
       </Form>
    </Modal>
  )
}

export default BlogModal