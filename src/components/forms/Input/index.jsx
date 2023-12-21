import { forwardRef } from "react"
import styles from "./style.module.scss";

export const Input = forwardRef(({error,...rest}, ref) => {
    return(
        <div className={styles.fieldBox}>
            <input ref={ref} {...rest} />
            {error ? <p className="paragraph">{error.message}</p> : null}
        </div>
    )
})