import { Outlet } from "react-router-dom"

export default function Entry() {
  return (
    <div className="flex justify-center h-[80vh] items-center">
        <Outlet />
    </div>
  )
}
