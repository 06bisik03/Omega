import styles from "./Navbar.module.css";
import { useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState("home");
  return (
    <div className={styles.container}>
      <div className={styles.title}>Omega</div>
      <div className={styles.elements}>
        <div
          style={{ color: active === "home" ? "blue" : "black" }}
          onClick={() => setActive("home")}>
          Home
        </div>
        <div
          style={{ color: active === "services" ? "blue" : "black" }}
          onClick={() => setActive("services")}>
          Services
        </div>
        <div
          style={{ color: active === "pricing" ? "blue" : "black" }}
          onClick={() => setActive("pricing")}>
          Pricing
        </div>
        <div
          style={{ color: active === "contact" ? "blue" : "black" }}
          onClick={() => setActive("contact")}>
          Contact
        </div>
      </div>
    </div>
  );
};
export default Navbar;
