'use client'
import { useRef, type FC } from 'react'
import { Card } from '@components/Card'
import { AppWindow, Briefcase } from '@phosphor-icons/react'
import styles from './styles.module.css'

const EXPERIENCE_DATA = [
    {
        id: "4",
        title: "Desarrollador fullstack",
        enterprise: "franfdezmorales.com",
        startDate: "03/2022",
        finishDate: "??",
        description: "Desarrollo de la web y de todos los servicios necesarios para su funcionalidad, también el escrito de los artículos del blog.",
        stack: ["REACT", "NEXTJS", "TYPESCRIPT", "EDGE FUNCTIONS", "CSS MODULES", "FRAMER"],
        Icon: AppWindow
    },
    {
        id: "3",
        title: "Desarrollador fullstack",
        enterprise: "maketexteasy.com",
        startDate: "02/2023",
        finishDate: "??",
        description: "Desarrollo de la aplicación, tanto la UI como el servicio para poder generar los textos a través de la IA.",
        stack: ["REACT", "NEXTJS", "OPENAI", "EDGE FUNCTIONS", "CSS MODULES"],
        Icon: AppWindow
    },
    {
        id: "2",
        title: "Desarrollador de software",
        enterprise: "OHTIC",
        startDate: "12/2022",
        finishDate: "??",
        description: "Desarrollo de diferentes aplicaciones web multifunción usando nuevas tecnologías y eligiendo los mejores servicios dependiendo del contexto.",
        stack: ["REACT", "NEXTJS", "AZURE", "OPENAI", "EDGE FUNCTIONS", "TYPESCRIPT", "CSS MODULES", "DOCKER"],
        Icon: Briefcase
    },
    {
        id: "1",
        title: "Desarrollador de software",
        enterprise: "T-Systems",
        startDate: "02/2022",
        finishDate: "12/2022",
        description: "Desarrollo de diferentes frontales para herramientas internas sobre control de stock y gestión de artículos usados por grandes compañías.",
        stack: ["REACT", "TYPESCRIPT", "VITE", "NEXTJS"],
        Icon: Briefcase
    }
]

type ScreenPosition = {
    bottom: string,
    left: string
}

const randomPositions: ScreenPosition[] = [
    { bottom: '30%', left: '7%' },
    { bottom: '15%', left: '31%' },
    { bottom: '24%', left: '51%' },
    { bottom: '21%', left: '73%' }
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