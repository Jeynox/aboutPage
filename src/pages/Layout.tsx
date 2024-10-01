import { Header } from "../components/Header"
import {Outlet} from "react-router-dom"

export function Layout() {
    return(
        <main className="main-content">
            <Header />
            <Outlet />
        </main>
    )
}