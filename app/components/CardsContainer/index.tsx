'use client'
import { useRef, type FC } from 'react'
import { Card } from '@components/Card'
import { AppWindow, Briefcase } from '@phosphor-icons/react'
import styles from './styles.module.css'

const EXPERIENCE_DATA = [
    {
        id: "3",
        title: "Ingeniero frontend",
        enterprise: "apipana.io",
        startDate: "11/2024",
        finishDate: "??",
        stack: ["REACT", "NEXTJS", "TYPESCRIPT", "PANDACSS", "DOCKER", "STORYBOOK", "TURBOREPO"],
        Icon: Briefcase
    },
    {
        id: "2",
        title: "Desarrollador de software",
        enterprise: "OHTIC",
        startDate: "12/2022",
        finishDate: "11/2024",
        stack: ["REACT", "NEXTJS", "AZURE", "OPENAI", "EDGE FUNCTIONS", "TYPESCRIPT", "CSS MODULES", "DOCKER"],
        Icon: Briefcase
    },
    {
        id: "1",
        title: "Desarrollador de software",
        enterprise: "T-Systems",
        startDate: "02/2022",
        finishDate: "12/2022",
        stack: ["REACT", "TYPESCRIPT", "VITE", "NEXTJS"],
        Icon: Briefcase
    }
]

type ScreenPosition = {
    bottom: string,
    left: string
}

const randomPositions: ScreenPosition[] = [
    { bottom: '45%', left: '23%' },
    { bottom: '32%', left: '45%' },
    { bottom: '38%', left: '68%' },
]

export const CardsContainer: FC = (): JSX.Element | null => {

    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <div className={styles.container}>
            <section className={styles.cards} ref={containerRef}>
                {EXPERIENCE_DATA.map((experience, index) => {
                    const cardPosition = randomPositions[index]
                    const cardProps = { ...experience, ...cardPosition }
                    return <Card key={experience.id} {...cardProps} ref={containerRef} />
                })}
            </section>
        </div>
    )
}