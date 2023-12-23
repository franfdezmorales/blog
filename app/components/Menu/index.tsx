import type { FC } from 'react'
import Link from 'next/link'
import { House, Article, Pen, Bookmark, GithubLogo, TwitterLogo, LinkedinLogo, Envelope, ArrowSquareOut } from '@phosphor-icons/react/dist/ssr'
import { ItemLink } from './Item'
import styles from './styles.module.css'

const NAVIGATION_DATA = [
    {
        name: 'Inicio', 
        icon: <House size={24} />, 
        href: '/'
    }, 
    {
        name: 'Artículos', 
        icon: <Article size={24} />, 
        href: '/articles'
    },
    {
        name: 'Firmas', 
        icon: <Pen size={24} />, 
        href: '/guestbook'
    },
    {
        name: 'Marcadores', 
        icon: <Bookmark size={24} />, 
        href: '/bookmark'
    },
]

const SOCIAL_MEDIA_DATA = [
    {
        name: 'Github', 
        icon: <GithubLogo size={24} />,
        href: 'https://github.com/franfdezmorales'
    }, 
    {
        name: 'Linkedin', 
        icon: <LinkedinLogo size={24} />,
        href: 'https://www.linkedin.com/in/franfdezmorales/'
    }, 
    {
        name: 'Twitter', 
        icon: <TwitterLogo size={24} />,
        href: 'https://twitter.com/franfdezmorales'
    },
    {
        name: 'Email', 
        icon: <Envelope size={24} />,
        href: 'mailto:hello@franfdezmorales.com'
    },
]

export const Menu: FC = (): JSX.Element => {

    return (
        <footer className={styles.wrapper}>
            <nav className={styles.sectionWrapper}>
                {NAVIGATION_DATA.map(item => (
                    <ItemLink key={item.name} name={item.name} href={item.href} icon={item.icon} />
                ))}
            </nav>
            <section className={styles.sectionWrapper}>
                {SOCIAL_MEDIA_DATA.map(item => (
                    <Link key={item.name} href={item.href} target='_blank' rel='noopener nofollow noreferrer' className={styles.item}>
                        {item.icon}
                        <div className={styles.itemTooltip}>
                            <span>{item.name}</span>
                            <ArrowSquareOut size={15} />
                        </div>
                    </Link>
                ))}
            </section>
        </footer>
    )
}