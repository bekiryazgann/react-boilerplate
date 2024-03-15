import {Route, Routes} from "react-router-dom";
import Home from "@/pages/home";

const Router = () => (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
)

export default Router
