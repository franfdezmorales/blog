'use client'
import { useState, type FC } from 'react'
import { FileUploader } from '@components/FileUploader'
import { FileUpload } from '@components/FileUpload'
import { uploadPhotos } from '@lib/admin'
import { UploadButton } from './buttonForm'
import styles from './styles.module.css'


export const AdminPhotoUploader: FC = (): JSX.Element => {

    const [files, setFiles] = useState<File[]>([])

    const handleDeleteFile = (name: string) => {
        setFiles(files.filter((file => file.name !== name)))
    }

    const handleUploadFiles = async (formData: FormData) => {
        for (let i = 0; i < files.length; i++) {
            const file = files[i]
            formData.append(`file-${i}`, file)
        }
        const { data: success } = await uploadPhotos(formData)
        if (success) setFiles([])
    }

    return (
        <section className={styles.wrapper}>
            <FileUploader
                onUploadFiles={setFiles}
                accept={{ 'image/*': ['.png', '.jpeg', '.jpg'] }}
                maxSize={10_485_760}
            />
            {files.length > 0
                ? <ul className={styles.files}>
                    {files.map(file => (
                        <FileUpload key={file.name} onDelete={handleDeleteFile} name={file.name} size={file.size} />
                    ))}
                </ul>
                : <div className={styles.noFiles}>
                    Actualmente no hay ningún archivo listo para subir
                </div>}
            {files.length > 0
                ? <form className={styles.form} action={handleUploadFiles}>
                    <UploadButton />
                </form>
                : null}
        </section>
    )
}