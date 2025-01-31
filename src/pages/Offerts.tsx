import { useEffect, useState } from "react"
import { getOfferts } from "../services/offerServices"

interface Offer {
    id: number
    title: string
    description: string
    contactEmail: string
    location: string
    published: boolean
    expired: boolean
}
function Categorys() {
    const [offerts, setOfferts] = useState<Offer[]>([])
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function call() {
            try {
                const offertsList = await getOfferts()
                setOfferts(offertsList)
            } catch (error) {
                const msg = error instanceof Error ? error.message : 'Error desconocido'
                setMessage(msg)
            } finally {
                setLoading(false)
            }
        }
        call()
    }, [])

    if (loading) return <div>Loading...</div>


    return (
        <div className="relative overflow-x-auto">
            {message}
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Titulo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            contactEmail
                        </th>
                        <th scope="col" className="px-6 py-3">
                            location
                        </th>
                        <th scope="col" className="px-6 py-3">
                            published
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {offerts.map(offer =>
                        <tr key={offer.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {offer.title}
                            </th>
                            <td className="px-6 py-4">
                                {offer.description}
                            </td>
                            <td className="px-6 py-4">
                                {offer.contactEmail}
                            </td>
                            <td className="px-6 py-4">
                                {offer.location}
                            </td>
                            <td className="px-6 py-4">
                                {offer.published}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    )
}

export default Categorys
