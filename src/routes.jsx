import Home from "./features/home/home";
import AboutUs from "./features/aboutUs/aboutus";
import HomeLayout from "./layouts/HomeLayout";
import ContactUs from "./features/contactUs/contactUs";
import GlobalHeader from "./features/Header/GlobalHeader";
import {Outlet} from "react-router-dom";
import Address1 from "./features/contactUs/permanentAddress";
import Address2 from "./features/contactUs/presentAddress";
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
        element: (
          <ContactUs>
            <Outlet />
          </ContactUs>
        ),
        children: [
          {
            index: true,
            element: <Address1 />,
          },
          {
            path: "ad2",
            element: <Address2 />,
          },
        ],
      },
    ],
  },
  // ... other routes for your application
];

export default routes;
