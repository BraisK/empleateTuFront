import { useEffect, useState } from "react"
import { getCategories } from "../services/categoryServices"

interface Category {
    id: number,
    name: string
}
function Categories() {
    const [categories, setCategorys] = useState<Category[]>([])
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function call() {
            try {
                const categoryList = await getCategories()
                setCategorys(categoryList)
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
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nombre
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category =>
                        <tr key={category.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {category.id}
                            </th>
                            <td className="px-6 py-4">
                                {category.name}
                            </td>
                            
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    )
}

export default Categories