import { Outlet } from "react-router-dom"
import Header from "./Header"

const MainLayout = () => {
    return (
        <div>
            <Header />
            <section className="container mx-auto">
                <Outlet />
            </section>
        </div>
    )
}
export default MainLayout