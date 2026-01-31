import { useReduxSelector } from "../hook/useRedux/useredux"
import BlogModal from "../pages/blog/blogModal"
import AuthorizationModal from "./modals-item/authorization"

const Modals = () => {
    const {authorizationModalVisibility} =useReduxSelector(state=> state.modalSlice)
    const {isOpen} =useReduxSelector(state=> state.blogModalSlice)
  return (
    <>
    {authorizationModalVisibility && <AuthorizationModal />}
    {isOpen && <BlogModal />}
    </>
  )
}

export default Modals