import { Outlet } from "react-router-dom";
import HeaderBar from "../../components/HeaderBar";
import HomeBody from "../../components/HomeBody";

export default function Home() {
    return (
        <>
            <HeaderBar/>
            <Outlet/>
        </>
        
    )
}