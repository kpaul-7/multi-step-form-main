import { Fragment, useState } from "react";
import style from "./Addons.module.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveAddons } from "../../../store/slices/addons";
const Addons = () => {
  const addonsList = [
    { id: 1, name: "Online Service", price: 1 },
    { id: 2, name: "Larger storage", price: 2 },
    { id: 3, name: "Customizable profile", price: 2 },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const onSubmitHandler = () => {
    const selected = [];
    if (first) {
      selected.push(addonsList[0]);
    }
    if (second) {
      selected.push(addonsList[1]);
    }
    if (third) {
      selected.push(addonsList[2]);
    }
    dispatch(saveAddons([...selected]));
    navigate("/confirm");
  };
  return (
    <Fragment>
      <div className={style.Addons}>
        <p className={style.Heading}>Pick add-ons</p>
        <p className={style.Info}>
          Add-ons help enhance your gaming exprience.
        </p>
        <div className={`${style.AddonGroup} ${first && style.BlueBorder}`}>
          <div className={style.FirstSubGroup}>
            <div>
              <input
                type="checkbox"
                value={first}
                checked={first}
                onChange={(e) => setFirst((prev) => !prev)}
              />
            </div>
            <div>
              <p className={style.AddonName}>Online Service</p>
              <p className={style.AddonDesc}>Access to multiplayer games</p>
            </div>
          </div>
          <div>
            <p>+$1/mo</p>
          </div>
        </div>
        <div className={`${style.AddonGroup} ${second && style.BlueBorder}`}>
          <div className={style.FirstSubGroup}>
            <div>
              <input
                type="checkbox"
                value={second}
                checked={second}
                onChange={(e) => setSecond((prev) => !prev)}
              />
            </div>
            <div>
              <p className={style.AddonName}>Larger storage</p>
              <p className={style.AddonDesc}>Extra 1TB of cloud save</p>
            </div>
          </div>
          <div>
            <p>+$2/mo</p>
          </div>
        </div>
        <div className={`${style.AddonGroup} ${third && style.BlueBorder}`}>
          <div className={style.FirstSubGroup}>
            <div>
              <input
                type="checkbox"
                value={third}
                checked={third}
                onChange={(e) => setThird((prev) => !prev)}
              />
            </div>
            <div>
              <p className={style.AddonName}>Customizable profile</p>
              <p className={style.AddonDesc}>Custom theme on your profile</p>
            </div>
          </div>

          <div>
            <p>+$2/mo</p>
          </div>
        </div>
      </div>
      <div className={style.Footer}>
        <Link to="/plans">Go Back</Link>
        <button onClick={onSubmitHandler}>Next Step</button>
      </div>
    </Fragment>
  );
};
export default Addons;
