import { Outlet } from "react-router-dom";
import StyledNavBar from "../components/StyledNavBar";

const RootLayout = () => {
  return (
    <div className="flex flex-col md:flex-row md:mt-40 mx-auto max-w-2xl">
      <StyledNavBar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
