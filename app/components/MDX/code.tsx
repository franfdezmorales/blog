import { type HTMLAttributes, type FC } from "react"
import { highlight } from 'sugar-high'
import clsx from "clsx"
import { GeistMono } from 'geist/font/mono';

export const Code: FC<HTMLAttributes<HTMLElement>> = ({ children, className, ...props }): JSX.Element => {

    const htmlCode = highlight(children as string)

    return (
        <code
            className={clsx(className, GeistMono.className)}
            dangerouslySetInnerHTML={{
                __html: htmlCode
            }}
            {...props}
        />
    )
}