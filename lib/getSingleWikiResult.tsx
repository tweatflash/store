export default async function getSingleWikiResult(productId:number) {
    
    try {
        const request = await fetch(`https://dummyjson.com/products/${productId}` ,{next:{revalidate:60}})
        if (!request.ok) undefined
        return request.json()
    } catch (error) {
        return undefined
    }
}
