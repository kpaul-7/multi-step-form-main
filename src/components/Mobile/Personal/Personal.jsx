import { Fragment, useState } from "react";
import style from "./Personal.module.css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { saveData } from "../../../store/slices/personal";

const Personal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isPhoneError, setIsPhoneError] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const onSubmitHandler = () => {
    setIsEmailError(false);
    setIsPhoneError(false);
    if (!email) {
      setIsEmailError(true);
      setEmailError("This field required");
    }
    if (!phone) {
      setIsPhoneError(true);
      setPhoneError("This field required");
    }

    if (!isEmailError && !isPhoneError && email && phone) {
      dispatch(saveData({ username, email, phone }));
      navigate("/plans");
    }
  };
  return (
    <Fragment>
      <div className={style.Personal}>
        <p className={style.Heading}>Personal info</p>
        <p className={style.Info}>
          Please provide your name, email address, and phone number.
        </p>
        <div>
          <div className={style.FormGroup}>
            <label htmlFor="username">Name</label>
            <input
              type="text"
              placeholder="e.g. Stephen King"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={style.FormGroup}>
            <div className={style.LabelSection}>
              <label htmlFor="">Email</label>
              {isEmailError && <p className={style.Error}>{emailError}</p>}
            </div>
            <input
              type="text"
              placeholder="e.g. stephenking@lorem.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={isEmailError ? style.InputErrorBorder : ""}
            />
          </div>

          <div className={style.FormGroup}>
            <div className={style.LabelSection}>
              <label htmlFor="">Phone Number</label>
              {isPhoneError && <p className={style.Error}>{phoneError}</p>}
            </div>
            <input
              type="text"
              placeholder="e.g.+1 234 567 890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={isPhoneError ? style.InputErrorBorder : ""}
            />
          </div>
        </div>
      </div>
      <div className={style.Footer}>
        <button onClick={onSubmitHandler}>Next Step</button>
      </div>
    </Fragment>
  );
};
export default Personal;
