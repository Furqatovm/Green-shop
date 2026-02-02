import { 
    EyeOutlined,
    MessageOutlined,
    HeartOutlined,
} from '@ant-design/icons';
import {  Card, Flex } from 'antd';
import {  type FC } from 'react';
import type { BlogPost } from '../../@types/@type';
import { useNavigate } from 'react-router-dom';
import {  useIncreaseView } from '../../hook/useQuery/useQueryAction';

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
const {mutate:increaseView } =useIncreaseView()



  return (
    <Card  actions={actions}  
          onClick={() =>{navite(`/blog/${product._id}`)
   increaseView({postId: product._id as string})  
        }}
         style={{ width:"100%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"space-between"  }}>
      <Card.Meta
  
        title={`${product.title}`} style={{cursor:"pointer"}}
        description={product.short_description}
      />
    </Card>
  )
}

export default BlogChild