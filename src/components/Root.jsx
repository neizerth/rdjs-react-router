import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { Outlet } from "react-router-dom";

export const Root = () => (
    <div className="page">
        <Header/>
        <Main>
            <Outlet/>
        </Main>
        <Footer/>
    </div>
);