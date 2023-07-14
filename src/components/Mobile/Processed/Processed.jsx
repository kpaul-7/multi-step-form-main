import style from "./Processed.module.css";
import doneIcon from "../../../Assests/images/icon-thank-you.svg";
const Processed = () => {
  return (
    <div className={style.Processed}>
      <img src={doneIcon} alt="" />
      <p className={style.Thanks}>Thank you!</p>
      <p>Thanks for confirming your subscription! </p>
      <p className={style.Message}>
        We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
};

export default Processed;
