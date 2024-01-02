'use client'
import { type FC } from 'react'
import { FileJpg, X } from '@phosphor-icons/react'
import styles from './styles.module.css'

interface Props {
    name: string
    size: number
    onDelete: (name: string) => void
}

export const FileUpload: FC<Props> = ({ name, size, onDelete }): JSX.Element => {

    const handleDelete = () => {
        onDelete(name)
    }

    return (
        <li className={styles.file} key={name}>
            <FileJpg className={styles.iconFile} />
            <span className={styles.iconName}>{name}</span>
            <span className={styles.iconSize}>{(size / 104_8576).toFixed(3)} megabytes</span>
            <div className={styles.deleteWrapper}>
                <X onClick={handleDelete} className={styles.icon} />
            </div>
        </li>
    )
}