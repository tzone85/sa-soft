import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./src/views/ Login.jsx";
import Signup from "./src/views/Signup.jsx";
import Users from "./src/views/Users.jsx";
import NotFoundView from "./src/views/NotFoundView.jsx";
import DefaultLayout from "./src/components/DefaultLayout.jsx";
import GuestLayout from "./src/components/GuestLayout.jsx";
import Dashboard from "./src/views/Dashboard.jsx";
import UserForm from "./src/views/UserForm.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to="/users"/>
            },
            {
                path: '/users',
                element: <Users/>
            },
            {
                path: '/users/new',
                element: <UserForm key="userCreate"/>
            },
            {
                path: '/users/:id',
                element: <UserForm key="userUpdate"/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/signup',
                element: <Signup/>
            },
            {
                path: '/login',
                element: <Login/>
            },
        ]
    },
    {
        path: '*',
        element: <NotFoundView/>
    }
])

export default router;
