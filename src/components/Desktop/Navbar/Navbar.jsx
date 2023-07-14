import { Link, useLocation } from "react-router-dom";
import MobileHeroImg from "../../../Assests/images/bg-sidebar-desktop.svg";
import style from "./Navbar.module.css";
const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className={style.Navbar}>
      <img src={MobileHeroImg} alt="mobile background" />
      <nav>
        <ul>
          <li>
            <div className={style.NavElements}>
              <div>
                <Link
                  to="/"
                  className={pathname === "/" ? style.activePath : ""}
                >
                  1
                </Link>
              </div>
              <div className={style.NavDetails}>
                <p>STEP 1</p>
                <p>YOUR INFO</p>
              </div>
            </div>
          </li>
          <li>
            <div className={style.NavElements}>
              <div>
                <Link
                  to="/plans"
                  className={pathname === "/plans" ? style.activePath : ""}
                >
                  2
                </Link>
              </div>
              <div className={style.NavDetails}>
                <p>STEP 2</p>
                <p>SELECT PLAN</p>
              </div>
            </div>
          </li>
          <li>
            <div className={style.NavElements}>
              <div>
                <Link
                  to="/addons"
                  className={pathname === "/addons" ? style.activePath : ""}
                >
                  3
                </Link>
              </div>
              <div className={style.NavDetails}>
                <p>STEP 3</p>
                <p>ADD-ONS</p>
              </div>
            </div>
          </li>
          <li>
            <div className={style.NavElements}>
              <div>
                <Link
                  to="/confirm"
                  className={pathname === "/confirm" ? style.activePath : ""}
                >
                  4
                </Link>
              </div>
              <div className={style.NavDetails}>
                <p>STEP 4</p>
                <p>SUMMARY</p>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
