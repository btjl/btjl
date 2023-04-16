import { Outlet } from "react-router-dom";
import StyledNavBar from "../components/StyledNavBar";

const RootLayout = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen mx-auto max-w-3xl items-center">
      <StyledNavBar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
