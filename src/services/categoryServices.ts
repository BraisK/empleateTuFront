const API_URL_BASE = import.meta.env.VITE_API_URL_BASE
export const getCategories = async () => {
    try {
        const response = await fetch(API_URL_BASE + '/categories/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        if (!response.ok) {
            throw new Error('Failed to get the offerts')
        }
        return await response.json()
    } catch (error) {
        const msg = error instanceof Error ? error.message : 'Error desconocido'
        throw new Error(msg)
    }
}