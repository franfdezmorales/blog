import { useRef } from "react"

const useFirstRender = (): boolean => {
    const isFirst = useRef<boolean>(true)

    if (isFirst.current) {
        isFirst.current = false
        return true
    } else {
        return false
    }
}

export default useFirstRender