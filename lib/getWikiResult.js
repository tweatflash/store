export default async function getWikiResults(searchTerm) {
    const searchParams = new URLSearchParams({
        action: 'query',
        generator:'search',
        gsrsearch: searchTerm,
        gsrlimit: '20',
        prop:'pageimages|extracts',
        exchars: '100',
        exintro: 'true',
        explaintext: 'true',
        format: 'json',
        exlimit: 'max',
        origin: '*',
    })
    try {
        const request = await fetch(searchTerm==="all"?'https://dummyjson.com/products':'https://dummyjson.com/products/search?q='+searchTerm ,{next:{revalidate:60}})
        if (!request.ok) undefined
        return request.json()
    } catch (error) {
        return undefined
    }   
    
}
