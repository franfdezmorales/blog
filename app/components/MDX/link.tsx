import { type AnchorHTMLAttributes, type FC } from "react"
import styles from './styles.module.css'

export const CustomLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ children, ...props }): JSX.Element => {

    return (
        <a
            className={styles.link}
            target='_blank'
            rel='noopener nofollow noreferrer'
            {...props}
        >
            {children}
        </a>
    )
}