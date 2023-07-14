import Navbar from "../Navbar/Navbar";
import style from "./Layout.module.css";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <div className={style.Layout}>
      <Navbar />
      <div className={style.Outlet}>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
