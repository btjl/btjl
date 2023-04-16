import { Outlet } from "react-router-dom";
import StyledNavBar from "../components/StyledNavBar";

const SharedLayout = () => {
  return (
    <div>
      <StyledNavBar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
