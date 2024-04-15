import Home from "./features/home/home";
import AboutUs from "./features/aboutUs/aboutus";
import HomeLayout from "./layouts/HomeLayout";
import ContactUs from "./features/contactUs/contactUs";
import GlobalHeader from "./features/Header/GlobalHeader";
import {Outlet} from "react-router-dom";
// import {BrowserRouter} from "react-router-dom";

// function CustomRouter() {
//   return (
//     <>
//       <BrowserRouter></BrowserRouter>
//     </>
//   );
// }
const routes = [
  {
    element: (
      <HomeLayout>
        <GlobalHeader /> <Outlet />
      </HomeLayout>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
  // ... other routes for your application
];

export default routes;
