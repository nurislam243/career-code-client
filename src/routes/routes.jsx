import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRouts from "./PrivateRoute";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
          index: true,
          Component: Home
        },
        {
          path: '/jobs/:id',
          Component: JobDetails,
          loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
          path: '/jobApply/:id',
          element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path: '/myApplications',
          element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
        },
        {
          path: '/register',
          Component: Register
        },
        {
          path: '/signIn',
          Component: SignIn
        }
    ]
  },
]);

export default router;