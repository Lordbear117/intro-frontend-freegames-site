import { NavLink } from "react-router-dom";
import { IoGameController, IoTrendingUp } from "react-icons/io5";

// styles
import styles from "./BottomBar.module.css";

const BottomBar = () => {
  const activeStyle = {
    color: "#fff",
  };

  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <IoGameController className={styles.icon} />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/popular"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <IoTrendingUp className={styles.icon} />
            <span>Popular</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BottomBar;
