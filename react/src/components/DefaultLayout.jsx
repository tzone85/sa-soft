import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import {useEffect} from "react";
import axiosClient from "../axios-client.js";

export default function DefaultLayout() {

    const {user, token, notification, setUser, setToken} = useStateContext()

    if (!token) {
        return <Navigate to='/login' />
    }

    const onLogout = (event) => {
        event.preventDefault();

        axiosClient.post(`/logout`)
            .then(() => {
                setUser({})
                setToken(null)
            })
    }

    useEffect(() => {
        axiosClient.get(`/user`)
            .then(({data}) => {
                setUser(data)
            })
    }, [])

    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
            </aside>

            <div className="content">
                <header>
                    <div>
                        HEADER
                    </div>
                    <div>
                        {user.name}
                        <a className="btn-logout" href="#" onClick={onLogout}>Logout</a>
                    </div>
                </header>
                    <main>
                        <Outlet />
                    </main>

            </div>

            <h1>Default</h1>
            <Outlet />

            {notification &&
                <div className="notification ">
                    {notification}
                </div>
            }
        </div>
    )
}
