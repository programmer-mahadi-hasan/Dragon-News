import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
    },
    {
        path: '/news',
        element: <h1>News Layout</h1>
    },
    {
        path: '/auth',
        element: <h1>Auth Layout</h1>
    },
])

export default router;