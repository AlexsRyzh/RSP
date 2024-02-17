import {ImageSearchDispatch, ImageSearchState} from "@/widgets/Image/context/store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const useImageSearchDispatch: () => ImageSearchDispatch = useDispatch
export const useImageSearchSelect: TypedUseSelectorHook<ImageSearchState> = useSelector