import { 
    EyeOutlined,
    MessageOutlined,
    HeartOutlined,
} from '@ant-design/icons';
import {  Card } from 'antd';
import {  type FC } from 'react';
import type { BlogPost } from '../../@types/@type';
import { useNavigate } from 'react-router-dom';

interface BlogPostChildren {
  product:BlogPost
}



const BlogChild:FC<BlogPostChildren> = ({product}) => {
  const actions: React.ReactNode[] = [
    <span className='flex gap-1 hover:text-logoColor items-center justify-center'>
      <EyeOutlined key="view"  />
      <span>{product.views}</span>
    </span>,
    <span  className='flex gap-1 hover:text-logoColor items-center justify-center'>
     <MessageOutlined key="comment"  />
     <span>{product.__v}</span>
   </span>,
    <span  className='flex gap-1 hover:text-logoColor items-center justify-center'>
    <HeartOutlined key="like"  />
    <span>{product.reaction_length}</span>
  </span>,
  ];
  const navite =useNavigate()


  return (
    <Card  actions={actions} 
          onClick={() =>(navite(`/blog/${product._id}`))}
         style={{ width:"100%", height:"100%" }}>
      <Card.Meta
  
        title={`${product.title}`} style={{cursor:"pointer"}}
        description={product.short_description}
      />
    </Card>
  )
}

export default BlogChild