'use client'
import { useFirstRender } from '@hooks'
import { type ReactNode, type FC, useId } from 'react'

interface Props {
    children: ReactNode
    maxSizeToRender: number
}

export const SkipRenderOnClient: FC<Props> = ({ children, maxSizeToRender }): JSX.Element => {

    const id = useId()
    const isClient = typeof window !== 'undefined'
    const isFirstRender = useFirstRender()

    if (isClient && isFirstRender && window.innerWidth > maxSizeToRender === false) {
        const el = document.getElementById(id)
        if (el) el.innerHTML = ''
    }

    const shouldRender = isClient ? window.innerWidth > maxSizeToRender : true

    return (
        <div id={id}>{shouldRender ? children : null}</div>
    )
}