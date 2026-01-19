import { useReduxSelector } from "../hook/useRedux/useredux"
import AuthorizationModal from "./modals-item/authorization"

const Modals = () => {
    const {authorizationModalVisibility} =useReduxSelector(state=> state.modalSlice)
  return (
    <>
    {authorizationModalVisibility && <AuthorizationModal />}
    </>
  )
}

export default Modals