import styles from "./style.module.scss";

export const ContentSection = ({ post }) => {
   return post ? (
      <section className={styles.contentSection}>
         <div className="container sm">
            <article>
               <h1 className="title blog center">{post.title}</h1>
               <span className="paragraph bold center">{post.author}</span>
               <p className="paragraph center">{post.content}</p>
            </article>
         </div>
      </section>
   ) : null;
};
