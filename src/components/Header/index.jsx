import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";

export const Header = () => {
   return (
      <header>
         <div className="container">
            <div className={styles.flexBox}>
               <Link to="/">
                  <img src={Logo} alt="Logo The Journal" />
               </Link>
               <Link className="btn" to="/contact">
                  Fale conosco
               </Link>
            </div>
         </div>
      </header>
   );
};
