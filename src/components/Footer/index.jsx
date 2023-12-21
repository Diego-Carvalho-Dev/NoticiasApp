import Logo from "../../assets/LogoWhite.svg";
import styles from "./style.module.scss";

export const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className="container">
            <div className={styles.flexBox}>
               <img src={Logo} alt="Logo The Journal" />
            </div>
         </div>
      </footer>
   );
};
