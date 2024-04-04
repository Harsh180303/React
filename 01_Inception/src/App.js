import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";


// Chunking
// Code Splitting
// Dynamic Bundeling
// Lazy Loading
// Dynamic Loading
// On demand Loading

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // authentication
  useEffect(() => {
    // Make an api call and send usename and password
    const data = {
      name: "Harsh Chourasiya",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      children: [
        {
          path: "/",
          element: <Body/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/grocery",
          element: <Suspense fallback={<h2>Loading...</h2>}><Grocery/></Suspense>
        },
        {
          path: "/restaurants/:resId",
          element: <RestaurantMenu/>,
        }
      ],
      errorElement: <Error/>
    },
    
  ])
  
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
