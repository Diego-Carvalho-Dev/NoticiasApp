import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export const PostCard = ({ post }) => {
   return (
      <li className={styles.postCard}>
         <h3 className="title two">{post.title}</h3>
         <Link className="link" to={`/post/${post.id}`}>
            Ler mais
         </Link>
      </li>
   );
};
