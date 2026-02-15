import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import NavigationBar from "./Components/Navbar";

const RootLayout = () => {
  return (
    <>
      <NavigationBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default RootLayout;
