import Navbar from "../Navbar/Navbar";
import style from "./Layout.module.css";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <div className={style.Layout}>
      <div className={style.LayoutWrapper}>
        <div>
          <Navbar />
        </div>
        <div className={style.Outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;
