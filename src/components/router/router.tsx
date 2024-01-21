import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import NotFound from "../not-found/not-found";
import Home from "../../components/home/home";
import Confession from "../confession/confession";
import {MisdemeanourContainer} from "../misdemeanours/misdemeanour-container";

export const Router = () => {
    return (
    <Routes>
        <Route path = "/" element = {<MainLayout/>}>
            <Route index element = {<Home/>}/>
            <Route path = "misdemeanours" element = {<MisdemeanourContainer />}>
                <Route path=":paramKind" element={<MisdemeanourContainer />} />
            </Route>
            <Route path = "confession" element = {<Confession/>}/>
            <Route path = "*" element = {<NotFound/>}/>
        </Route>
    </Routes>
    );
}