import React from "react"

export const useLocalStorage = (key: string, initialValue: any) => {
    const [storedValue, setStoredValue] = React.useState(initialValue)

    // Use useEffect to sync with localStorage after mount (client-side only)
    React.useEffect(() => {
        try {
            const item = window.localStorage.getItem(key)
            if (item) {
                setStoredValue(JSON.parse(item))
            }
        } catch (error) {
            console.log(error)
        }
    }, [key])

    const setValue = (value: any) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value
            setStoredValue(valueToStore)
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore))
            }
        } catch (error) {
            console.log(error)
        }
    }
    return [storedValue, setValue]
}
