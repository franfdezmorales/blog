'use client'
import { forwardRef, type ForwardRefExoticComponent, useMemo, type RefObject, type RefAttributes } from 'react'
import { motion, type Variants } from 'framer-motion'
import type { InertiaOptions } from 'framer-motion/types/gestures/drag/types'
import styles from './styles.module.css'
import { type Icon } from '@phosphor-icons/react'

interface Props {
    id: string,
    title: string,
    enterprise: string,
    startDate: string,
    finishDate: string,
    stack: string[],
    Icon: Icon,
    bottom: string,
    left: string
}

const dragTransition: InertiaOptions = { timeConstant: 50, power: 0.1 };

export const Card: ForwardRefExoticComponent<Props & RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, Props>(({ id, title, enterprise, startDate, finishDate, stack, Icon, bottom, left }, ref) => {

    const variants: Variants = useMemo(() => {
        return {
            start: { bottom: "-50%", left: "50%", zIndex: 1 },
            end: {
                bottom,
                left,
                rotate: (Math.random() - 0.5) * 30,
                transition: { duration: 0.4, delay: Math.random() / 3 },
            },
            hover: {
                zIndex: 2,
                transition: { duration: 0 },
            },
            dragging: {
                cursor: "grabbing",
                zIndex: 2,
                transition: { duration: 0.05 },
            },
        }
    }, [])

    return (
        <motion.div
            className={styles.card}
            layout
            variants={variants}
            initial='start'
            animate='end'
            whileHover='hover'
            whileTap='dragging'
            drag
            dragConstraints={ref as RefObject<HTMLDivElement>}
            dragTransition={dragTransition}
        >
            <section className={styles.cardSection}>
                <Icon className={styles.icon} size={32} />
                <h2 className={styles.title}>{title}</h2>
                <section className={styles.information}>
                    <h3 className={styles.informationText}>{enterprise}</h3>
                    <h3 className={styles.informationText}>{`${startDate} - ${finishDate}`}</h3>
                </section>
            </section>
            <section className={styles.cardSection}>
                <p className={styles.stack}>STACK: <span className={styles.stacks}>{stack.join(', ')}</span></p>
            </section>
        </motion.div>
    )
})