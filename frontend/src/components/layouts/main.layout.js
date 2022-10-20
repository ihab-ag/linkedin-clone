import { Outlet } from "react-router-dom"
import { Navbar } from "../ui/navbar"

export const Main = () => {

    return (
        <>
        <Navbar />
        <div className="flex flex-col justify-center items-center">
            <Outlet />
        </div>
        </>
    )
}