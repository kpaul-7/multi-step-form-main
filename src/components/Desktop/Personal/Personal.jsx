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

  const validateEmail = (email) => {
    if (email === "") {
      return false;
    }
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const validatePhone = (inpPhone) => {
    if (inpPhone === "") {
      return false;
    }
    return inpPhone?.match(/\d/g)?.length === 10;
  };
  const onSubmitHandler = () => {
    setIsEmailError(false);
    setIsPhoneError(false);
    setEmailError("");
    setPhoneError("");

    if (!validatePhone(phone)) {
      setIsPhoneError(true);
      setPhoneError("Wrong number");
    }
    if (!validateEmail(email)) {
      setIsEmailError(true);
      setEmailError("Wrong email");
    }
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
        <div>
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
      </div>
    </Fragment>
  );
};
export default Personal;
