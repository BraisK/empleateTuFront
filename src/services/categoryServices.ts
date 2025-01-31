const URL_BASE = 'http://localhost:3000/api/'
export const getCategories = async () => {
    try {
        const response = await fetch(URL_BASE + 'categories/', {
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