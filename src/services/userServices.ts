const API_URL_BASE = import.meta.env.VITE_API_URL_BASE
export const getUsers = async () => {
    try {
        const response = await fetch(API_URL_BASE + 'users/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        if (!response.ok) {
            throw new Error('Failed to get the users')
        }
        return await response.json()
    } catch (error) {
        const msg = error instanceof Error ? error.message : 'Error desconocido'
        throw new Error(msg)
    }
}
export const registerUser = async (name:string ,email: string, password: string) => {
    try {
        const response = await fetch(API_URL_BASE + '/auth/register',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, email, password }),
                credentials: 'include'
            }
        )
        if (!response.ok) throw new Error('Error al registrarse')

        return await response.json()
    } catch (error) {
        const msg = error instanceof Error ? error.message : 'Error desconocido'
        throw new Error(msg)
    }
}