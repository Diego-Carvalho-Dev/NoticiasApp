import { ContactForm } from "../../components/forms/ContactForm";
import Contact from "../../assets/ContactIllustration.jpg";
import styles from "./style.module.scss";

export const ContactPage = () => {
   return (
      <>
         <section className={styles.contactSection}>
            <div className="container">
               <div className={styles.flexBox}>
                  <img src={Contact} alt="Ilustração Contato" />
                  <div>
                     <h1 className="title one">Fale conosco</h1>
                     <p className="paragraph">
                        Preencha o formulário para enviar uma mensagem
                     </p>
                     <ContactForm />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};
