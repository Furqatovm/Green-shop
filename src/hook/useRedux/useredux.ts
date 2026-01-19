import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import type { DispatchType, RootStore } from "../../redux";

export const useReduxSelector:TypedUseSelectorHook<RootStore> =useSelector;
export const useReduxDispatch =() => useDispatch<DispatchType>();

