import arcade from "../../../Assests/images/icon-arcade.svg";
import advance from "../../../Assests/images/icon-advanced.svg";
import pro from "../../../Assests/images/icon-pro.svg";
import style from "./Plan.module.css";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { savePlan } from "../../../store/slices/plan";
import { useDispatch } from "react-redux";
const Plan = () => {
  const dispatch = useDispatch();
  const priceList = { Arcade: 9, Advance: 12, Pro: 15 };
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Arcade");
  const navigator = useNavigate();
  const onSubmitHandler = () => {
    dispatch(
      savePlan({
        type: isYearly ? "Yearly" : "Monthly",
        name: selectedPlan,
        price: isYearly
          ? priceList[selectedPlan] * 10
          : priceList[selectedPlan],
      })
    );
    navigator("/addons");
  };
  return (
    <Fragment>
      <div className={style.Plan}>
        <p className={style.Heading}>Select your plan</p>
        <p className={style.Info}>
          You have the option of monthly or yearly billing.
        </p>
        <div>
          <div
            className={`${style.PlanGroup} ${
              selectedPlan === "Arcade" && style.BlueBorder
            }`}
            onClick={() => setSelectedPlan("Arcade")}
          >
            <div>
              <img src={arcade} alt="" />
            </div>
            <div>
              <p className={style.PlanName}>Arcade</p>
              <p>${isYearly ? 90 : 9}/mo</p>
              {isYearly && <p>2 months free</p>}
            </div>
          </div>
          <div
            className={`${style.PlanGroup} ${
              selectedPlan === "Advance" && style.BlueBorder
            }`}
            onClick={() => setSelectedPlan("Advance")}
          >
            <div>
              <img src={advance} alt="" />
            </div>
            <div>
              <p className={style.PlanName}>Advance</p>
              <p>${isYearly ? 120 : 12}/mo</p>
              {isYearly && <p>2 months free</p>}
            </div>
          </div>
          <div
            className={`${style.PlanGroup} ${
              selectedPlan === "Pro" && style.BlueBorder
            }`}
            onClick={() => setSelectedPlan("Pro")}
          >
            <div>
              <img src={pro} alt="" />
            </div>
            <div>
              <p className={style.PlanName}>Pro</p>
              <p>${isYearly ? 150 : 15}/mo</p>
              {isYearly && <p>2 months free</p>}
            </div>
          </div>
        </div>
        <div className={style.togglerDiv}>
          <p>Monthly</p>
          <label className={style.switch}>
            <input
              type="checkbox"
              checked={isYearly}
              onChange={(e) => setIsYearly((prev) => !prev)}
            />
            <span className={`${style.slider} ${style.round}`}></span>
          </label>
          <p>Yearly</p>
        </div>
      </div>
      <div className={style.Footer}>
        <Link to="/">Go Back</Link>
        <button onClick={onSubmitHandler}>Next Step</button>
      </div>
    </Fragment>
  );
};
export default Plan;
