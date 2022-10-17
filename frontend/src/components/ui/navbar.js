import { Link } from "react-router-dom"

export const Navbar = ({ type='user' }) => {
    let paths = []
    const USER_PATHS = [
        { name: "Profile", path: "/main/user/profile" },
        { name: "Jobs", path: "/main/user/jobs" },
        { name: "Notifications", path: "/main/user/notifications" }
    ]
    if(type==='user')
        paths=[...USER_PATHS]
    return (
        <header className="w-full bg-blue-500 flex flex-row justify-between items-center px-6 py-4">
            <h2 className="text-lg font-bold text-white tracking-wider">LinkedIn</h2>
            <ul className="text-white text-md font-semibold flex-row flex gap-x-2">
                {paths.map((item) => <li className="cursor-pointer hover:border-b-2 hover:border-b-solid">
                    <Link to={item.path}>{item.name}</Link>
                </li>)}
            </ul>
        </header>
    )
}