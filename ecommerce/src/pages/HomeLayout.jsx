import React from "react";
import { Outlet } from "react-router-dom";
import { Header,NavBar } from "../components";
const HomeLayout = () => {
  return (
    <>
      <Header/>
      <NavBar/>
      {/* <nav>
        <span className="text-4xl text-primary">Comfy</span>
      </nav> */}
      <section className="align-element py-10 ">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
