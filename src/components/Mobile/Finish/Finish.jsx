import { Link, useNavigate } from "react-router-dom";
import style from "./Finish.module.css";
import { Fragment } from "react";
import { useSelector } from "react-redux";
const Finish = () => {
  const navigate = useNavigate();
  const plan = useSelector((state) => state.plan.plan);
  const addOns = useSelector((state) => state.addons.addons);
  let totalCost = plan.price;
  for (let addon in addOns) {
    totalCost += addOns[addon].price;
  }
  const onSubmitHandler = () => {
    navigate("/done");
  };
  return (
    <Fragment>
      <div className={style.Finish}>
        <p className={style.Heading}>Finishing up</p>
        <p className={style.Info}>
          Double-check everything looks OK before confirming.
        </p>
        <div className={style.BlueBackground}>
          <div className={`${style.FinishGroup} ${style.ChoosenPlan}`}>
            <div>
              <p>
                {plan.name}({plan.type})
              </p>
              <Link to="/plans">Change</Link>
            </div>
            <div>
              <p>${plan.price}/mo</p>
            </div>
          </div>
          {addOns?.length > 0 &&
            addOns.map((elm) => (
              <div key={elm.id} className={style.FinishGroup}>
                <div>
                  <p>{elm.name}</p>
                </div>
                <div>
                  <p>${elm.price}/mo</p>
                </div>
              </div>
            ))}
        </div>
        <div className={style.Final}>
          <div>
            <p>Total(per month)</p>
          </div>
          <div>
            <p className={style.FinalPrice}>+${totalCost}/mo</p>
          </div>
        </div>
      </div>
      <div className={style.Footer}>
        <Link to="/addons">Go Back</Link>
        <button onClick={onSubmitHandler}>Next Step</button>
      </div>
    </Fragment>
  );
};
export default Finish;
