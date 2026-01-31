import DetailRight from "./detailRight";
import ProductGallery from "./image";
import { useQueryHandler } from "../../hook/useQuery/usequery";
import { useParams } from "react-router-dom";
import  DetailLoader from "../../genetics/detailLoader/detailLoader";

const DetailPage = () => {
  const { category } = useParams();
  const { id } = useParams();
  console.log(id);
  const { data, isLoading } = useQueryHandler({
    url: `flower/category/${category}/${id}`,
    pathname: `detail`,
  });
  console.log(data)

  const images =data?.data?.detailed_images ||[];
  const main_img =data?.data?.main_image

  return (
    <div>
      <div className="grid grid-cols-2 gap-10 my-5">
        <div>
          {
            isLoading ?
            <DetailLoader />
            :
            <ProductGallery detailed_images={images} main_img={main_img}/>
          }
        </div>
        <div>
          <DetailRight product={data?.data} />
        </div>
      </div>
  
    </div>
  );
};

export default DetailPage;
