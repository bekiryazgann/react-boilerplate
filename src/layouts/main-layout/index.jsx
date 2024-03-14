import {Outlet} from "react-router-dom";
import Header from "@/layouts/main-layout/header/index.jsx";
import Footer from "@/layouts/main-layout/footer/index.jsx";

export default function MainLayout(){
    return(
        <main className="bg-gray-950 h-screen py-8 text-white fixed inset-0">
            <div className="container mx-auto flex flex-col items-center justify-between h-full">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </main>
    )
}