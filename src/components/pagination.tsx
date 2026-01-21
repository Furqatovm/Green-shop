import React from 'react';
import { Pagination, Space } from 'antd';
import type { PaginationProps } from 'antd';

const MyPagination: React.FC = () => {
  const paginationSharedProps: PaginationProps = {
    total: 100,
  };

  const styleFn: PaginationProps['styles'] = () => ({
    item: {
      backgroundColor: "transparent",
      border: "1px solid #E5E5E5",
      marginInlineEnd: 4,
      borderRadius: 4,
      color: "#000", 
    },
    itemActive: {
      backgroundColor: "#46A358", 
      borderColor: "#46A358",
      color: "#fff",
    },
  });

  return (
    <Space direction="vertical" size="middle">
      <Pagination {...paginationSharedProps} styles={styleFn} />
    </Space>
  );
};

export default MyPagination;
