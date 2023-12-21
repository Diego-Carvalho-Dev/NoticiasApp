import { forwardRef } from "react"
import styles from "./style.module.scss";

export const Textarea = forwardRef(({error,...rest}, ref) => {
    return(
        <div className={styles.fieldBox}>
            <textarea ref={ref} {...rest} />
            {error ? <p className="paragraph">{error.message}</p> : null}
        </div>
    )
})