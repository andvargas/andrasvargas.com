import { Link } from "react-router-dom";
import avlogo from "../../staticAssets/av-logo.png";

const Logo = (props) => (
  <div>
    <Link to="/">
      <img src={avlogo} width="200" alt="logo" />
    </Link>
  </div>
);

export default Logo;
