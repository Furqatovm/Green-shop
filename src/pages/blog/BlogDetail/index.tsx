import { Avatar } from "antd"
import { useParams } from "react-router-dom";
import { useQueryHandler } from "../../../hook/useQuery/usequery";

const BlogDetail = () => {
        const { id } = useParams();
        console.log(id);
        const { data } = useQueryHandler({
          url: `user/blog/${id}`,
          pathname: `detail-${id}`,
        });
        const Blog =data?.data

        const userId =Blog?.created_by;

        const {data:data2} =useQueryHandler({
            url:`user/by_id/${userId}`,
            pathname:`blog-user-info-${userId}`
        });


        const userInfo =data2?.data
        console.log(userInfo)
  return (
    <div className="p-2">
        <div className="flex gap-2 items-center">
            <Avatar size={"large"} src={userInfo?.profile_photo} />
            <div className="flex flex-col ">
                <span className="block text-linkColor font-bold text-[20px]">{userInfo?.name}</span>
                <span className="block text-blogText font-medium text-[12px]">Followers: {userInfo?.followers.length}</span>
            </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <h2 className="text-linkColor  text-[1.5rem] font-bold">{Blog?.title}</h2>
            <div dangerouslySetInnerHTML={{__html:Blog?.content}}>
            </div>
        </div>
    </div>
  )
}

export default BlogDetail