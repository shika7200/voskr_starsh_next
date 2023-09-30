import { Post } from "../types";
import styles from './Card.module.scss'
function Card(post: Post) {
    return (
        <>


    <h5 className={styles.h5}>{post.product}</h5>
    <p className={styles.p}>{post.price}</p>


        </>
    );
}

export default Card;
