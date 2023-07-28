import { Link } from "react-router-dom";
import avlogo from "../../staticAssets/av-logo.png";

const Logo = (props) => (
  <>
    <Link to="/">
      <img src={avlogo} width={props.width} alt="logo" />
    </Link>
  </>
);

export default Logo;
