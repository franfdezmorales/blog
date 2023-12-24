import { useEffect, useState } from "react"

const useLocalStorage = (key: string) => {

    const [value, setValue] = useState<string>('')

    useEffect(() => {
        const storageValue = localStorage.getItem(key) ?? ''
        setValue(storageValue)
    }, [])

    const updateValue = (newValue: string) => {
        localStorage.setItem(key, newValue)
        setValue(newValue)
    }

    const removeValue = () => {
        localStorage.removeItem(key)
        setValue('')
    }

    return {
        value,
        updateValue,
        removeValue
    }
}

export default useLocalStorage