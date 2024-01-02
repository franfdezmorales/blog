'use client'
import { useCallback, type FC, type Dispatch, type SetStateAction } from 'react'
import { type DropzoneOptions, useDropzone } from 'react-dropzone'
import { FileImage } from '@phosphor-icons/react'
import clsx from 'clsx'
import styles from './styles.module.css'

interface Props extends DropzoneOptions {
    onUploadFiles: Dispatch<SetStateAction<File[]>>
}

export const FileUploader: FC<Props> = ({ onUploadFiles, ...props }): JSX.Element => {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        onUploadFiles((currentFiles: File[]) => [...currentFiles, ...acceptedFiles])
    }, [onUploadFiles])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        ...props
    })

    return (
        <div {...getRootProps()} className={styles.uploadButton}>
            <input {...getInputProps()} />
            <div className={clsx(styles.content, isDragActive && styles.active)}>
                <FileImage
                    className={styles.icon}
                />
                <span className={styles.text}>
                    {isDragActive ? 'Suelta el archivo' : 'Arrastra el archivo o haz click aquí'}
                </span>
            </div>
        </div>
    )
}