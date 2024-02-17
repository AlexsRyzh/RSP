import {ReactNode} from "react";
import {Provider} from "react-redux";
import {store} from "@/widgets/Image/context/store";

interface Props {
    children: ReactNode
}

const SearchImageProvider = ({children}: Props) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
export {SearchImageProvider}