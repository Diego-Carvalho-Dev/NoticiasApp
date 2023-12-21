import { forwardRef } from "react"
import styles from "./style.module.scss";

export const Select = forwardRef(({children, error,...rest}, ref) => {
    return(
        <div className={styles.fieldBox}>
            <select ref={ref} {...rest}>
                {children}
            </select>
            {error ? <p className="paragraph">{error.message}</p> : null}
        </div>
    )
})