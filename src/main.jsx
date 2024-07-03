import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import User from "./components/User.jsx";
import Github, { githubLoader } from "./components/Github.jsx";
import { Route } from "react-router-dom";
import NoPage from "./components/NoPage.jsx";


// 1) way to declare routes
/*
const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/user/:id",
                element:<User/>
            },
            {
                path:"/github",
                element:<Github/>,
                loader:githubLoader //defined in github component, when i will hover github route it will call the githubLoader fn and fetch the data
            }
        ]
    }
])
*/

// 2nd way
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<NoPage />} />
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />{" "}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="github" loader={githubLoader} element={<Github />} />
        <Route path="user/:id" element={<User />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
