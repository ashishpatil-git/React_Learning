// HMR - Hot Module Reloading
// File Watcher Algorithm - C++
/* Normal way to create element but is not feasible if there are bulk to create, so we use map function*/
// const Body = () =>{
//     return (
//         <div className="restaurantList">
//             <RestaurantCard {...response[0].data}/>
//             <RestaurantCard {...response[1].data}/>
//             <RestaurantCard {...response[2].data}/>
//             <RestaurantCard {...response[3].data}/>
//             <RestaurantCard {...response[4].data}/>
//             <RestaurantCard {...response[5].data}/>
//             <RestaurantCard {...response[0].data}/>
//         </div>
//     )
// }

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "../src/components/headerComponent/Header";
import Body from "../src/components/bodyComponent/Body";
import Footer from "../src/components/footerComponent/Footer";
import About from "../src/components/aboutComponent/About";
import Contact from "../src/components/contactComponent/Contact";
import PageNotFound from "../src/components/errorPageComponent/PageNotFound";
import RestaurantDetails from "./components/restaurantDetailsComponent/restaurant.details.Component";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from "./components/profileComponent/Profile.Class.Component";

// Lazy loading below component.
// import Instamart from "./components/instamartComponent/Instamart";

// lazy() returns a promise , so the reason it takes some time to load.
const Instamart = lazy(() =>
  import("./components/instamartComponent/Instamart.js")
);

const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <Outlet />{" "}
      {/*Children mention in parents path will be replaced with this Outlet Component*/}
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          //Creating nested child components. Outlet for this has to be given in parent component.
          {
            //Since <About /> is parent here, you need to add <Outlet /> in <About />.
            path: "profile", //if you write "/profile"==> it will take as "localhost/profile", so use only "profile"
            element: <Profile name={"Sanjay"} />, //Sending props to class component.
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
        errorElement: <PageNotFound />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Page is Loading.....</h1>}>
            <Instamart />
          </Suspense>
        ),
        errorElement: <PageNotFound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
