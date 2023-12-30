'use client'
import { useCallback, type FC } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { SorterButton } from '@components/SorterButton'
import styles from './styles.module.css'

export const ArticleSorter: FC = (): JSX.Element => {

    const pathname = usePathname()
    const searchParams = useSearchParams()
    const sort = searchParams.get('sort') ?? 'date'
    const mode = searchParams.get('mode') ?? 'asc'

    const createQueryString = useCallback((name: string[], value: string[]) => {
        const params = new URLSearchParams(searchParams)
        for (let i = 0; i < name.length; i++) {
            params.set(name[i], value[i])
        }
        return params.toString()
    }, [searchParams])

    return (
        <section className={styles.sorters}>
            <SorterButton
                name='date'
                label='fecha'
                sort={sort}
                mode={mode}
                pathname={pathname}
                createQueryString={createQueryString}
            />
            <SorterButton
                name='title'
                label='título'
                sort={sort}
                mode={mode}
                pathname={pathname}
                createQueryString={createQueryString}
            />
            <SorterButton
                name='visits'
                label='visitas'
                sort={sort}
                mode={mode}
                pathname={pathname}
                createQueryString={createQueryString}
                disabled
            />
        </section>
    )
}