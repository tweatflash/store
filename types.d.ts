type Result={
    pageid: string,
    title: string,
    extract: string,
    thumbnail?:{
        source: string,
        width: number,
        height: number
    }
}

type SearchResult={
    query?:{
        pages?:Result[]
    }
}
type dummyStore={
    "id": number,
    "title": string,
    "description": string,
    "category": string,
    "price":number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "tags":[index][]
    "brand": string,
    "sku": string,
    "weight": number,
    "dimensions": {
        "width": number,
        "height": number,
        "depth": number
    },
    "warrantyInformation": string,
    "shippingInformation": string,
    "availabilityStatus": string,
    "reviews": {
        
        "rating":number ,
        "comment": string,
        "date": string,
        "reviewerName": string,
        "reviewerEmail": string
    }[],
    "returnPolicy": string,
    "minimumOrderQuantity": number,
    "meta": {
        "createdAt": string,
        "updatedAt": string,
        "barcode": string,
        "qrCode": string
    },
    "thumbnail": string,
    "images":string[]
}
type Product={
    products: dummyStore[]
}