import { Image, Space } from "antd";
import { useState } from "react";



interface ProductGalleryProps {
  detailed_images: string[];
  main_img:string
}

const ProductGallery:React.FC<ProductGalleryProps> = ({detailed_images,  main_img}) => {
  const images = detailed_images || [];
  const [active, setActive] = useState(main_img);


  return (
    <div className="flex gap-5">
      
      {/* Thumbnails */}
      <Space orientation="vertical">
        {images?.map((img) => (
          <Image
            key={img}
            src={img}
            width={70}
            preview={false}
            onClick={() => setActive(img)}
            style={{
              cursor: "pointer",
              border: active === img ? "2px solid #52c41a" : "1px solid #eee",
              padding: 4,
            }}
          />
        ))}
      </Space>

      {/* Main image */}
      <div className="p-4 bg-[#FBFBFB] rounded-lg">
      <Image 
        src={active}
        style={{objectFit:"cover"}}
        width={520}
        height={500}
      />
      </div>
    </div>
  );
};

export default ProductGallery;
