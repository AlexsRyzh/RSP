import {FC} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppLayout} from "@/pages/AppLayout/AppLayout";
import {SearchImagePage} from "@/pages/SearchImagePage/SearchImagePage";

const AppRouter: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path={'/'} element={<SearchImagePage/>}/>
                    <Route path={'/example-chat'} element={<div>app</div>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export {AppRouter}