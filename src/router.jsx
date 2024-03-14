import {Route, Routes} from "react-router-dom";
import Home from "@/pages/home";
import MainLayout from "@/layouts/main-layout/index.jsx";

const Router = () => (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
        </Route>
    </Routes>
)

export default Router
