import { Link, useLocation, useNavigate } from "react-router-dom";
import MobileHeroImg from "../../../Assests/images/bg-sidebar-mobile.svg";
import style from "./Navbar.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const isPersonalField = useSelector((state) => state.personal.status);
  console.log(isPersonalField);
  useEffect(() => {
    if (!isPersonalField) {
      navigate("/");
    }
  }, [isPersonalField, navigate]);
  return (
    <div className={style.Navbar}>
      <img src={MobileHeroImg} alt="mobile background" />
      <nav>
        <ul>
          <li>
            <Link to="/" className={pathname === "/" ? style.activePath : ""}>
              1
            </Link>
          </li>
          <li>
            <Link
              to="/plans"
              className={pathname === "/plans" ? style.activePath : ""}
            >
              2
            </Link>
          </li>
          <li>
            <Link
              to="/addons"
              className={pathname === "/addons" ? style.activePath : ""}
            >
              3
            </Link>
          </li>
          <li>
            <Link
              to="/confirm"
              className={pathname === "/confirm" ? style.activePath : ""}
            >
              4
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
