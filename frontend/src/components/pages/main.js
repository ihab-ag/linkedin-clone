import { Outlet } from "react-router-dom"
import { Navbar } from "../ui/navbar"

export const Main = () => {

    return (
        <>
        <Navbar />
        <Outlet />
        </>
    )
}