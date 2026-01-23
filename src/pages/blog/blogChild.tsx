import { 
    EyeOutlined,
    MessageOutlined,
    HeartOutlined,
} from '@ant-design/icons';
import {  Card } from 'antd';
import { useState } from 'react';

const actions: React.ReactNode[] = [
  <span className='flex gap-1 hover:text-logoColor items-center justify-center'>
    <EyeOutlined key="view"  />
    <span>9</span>
  </span>,
  <span  className='flex gap-1 hover:text-logoColor items-center justify-center'>
   <MessageOutlined key="comment"  />
   <span>9</span>
 </span>,
  <span  className='flex gap-1 hover:text-logoColor items-center justify-center'>
  <HeartOutlined key="like"  />
  <span>9</span>
</span>,
];


const BlogChild = () => {
    const [loading, setLoading] = useState<boolean>(false);
  return (
    <Card loading={loading} actions={actions} style={{ minWidth: 300 }}>
      <Card.Meta
        title="Card title"
        description={
          <>
           <p>Flowers are an essential element or accessory for every wedding. These are needed for the bridal bouquet, table flowers, entrances, interior décor, and bridesmaids’ posies. However, picking ideal flowers for a wedding is an extremely confusing task for most brides and grooms. In fact, it is natural for them to argue over such subjects too.</p>
          </>
        }
      />
    </Card>
  )
}

export default BlogChild