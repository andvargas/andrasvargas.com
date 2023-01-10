import { Link } from "react-router-dom";
import avlogo from "../../staticAssets/av-logo.png";

const logo = (props) => (
  <div>
    <Link to="/">
      <img src={avlogo} width="200" alt="logo" />
    </Link>
  </div>
);

export default logo;
