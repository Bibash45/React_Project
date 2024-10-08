import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Header, Loading, NavBar } from "../components";
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Header />
      <NavBar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-10 ">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default HomeLayout;
