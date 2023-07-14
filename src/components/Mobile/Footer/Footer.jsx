import { Link } from "react-router-dom";
import style from "./Footer.module.css";
const Footer = (props) => {
  return (
    <div className={style.Footer}>
      {props.prev && <Link className={style.Back}>go back</Link>}
      {!props.prev && <div className={style.blank}></div>}
      {props.iserror && <button onClick={props.action}>Next Step</button>}
      {!props.iserror && (
        <button onClick={props.action}>
          <Link className={style.next} to={props.next}>
            Next Step
          </Link>
        </button>
      )}
    </div>
  );
};
export default Footer;
