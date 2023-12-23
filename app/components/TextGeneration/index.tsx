'use client'
import { useLayoutEffect, type FC, useRef, type ReactNode } from 'react'
import styles from './styles.module.css'

interface Props {
    children: ReactNode
}

export const TextGeneration: FC<Props> = ({ children }): JSX.Element => {

    const nodeRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        function wrapLettersWithSpan(node: HTMLDivElement | ChildNode) {
            if (node.nodeType === Node.TEXT_NODE) {
                const text = node.textContent ?? ''
                const wrappedText = Array.from(text)
                    .map(letter => `<span aria-hidden class=${styles.textLetter}>${letter}</span>`)
                    .join('')
                    const spanContainer = document.createElement('span')
                    spanContainer.innerHTML = wrappedText
                    node.replaceWith(spanContainer)
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                const childNodes = Array.from(node.childNodes)
                childNodes.forEach(child => wrapLettersWithSpan(child))
            }
        }

        function addAnimationDelay(node: HTMLDivElement) {
            const spanNodes: NodeListOf<HTMLElement> = node.querySelectorAll('span > span')
            spanNodes.forEach((span, index) => {
                span.style.animationDelay = `${index * 0.001}s`
            })
        }

        if (nodeRef.current) {
            wrapLettersWithSpan(nodeRef.current)
            addAnimationDelay(nodeRef.current)
        }

    }, [nodeRef])

    return (
        <div ref={nodeRef}>
            {children}
        </div>
    )
}