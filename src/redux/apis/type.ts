export interface ProductType {
    id: number;
    product_category_id: number;
    name: string;
    producer: string;
    description: string;
    cost: number;
    rating: number;
    view_count: number;
    created: string;
    modified: string;
    product_images: string;
}

export interface ProductListResponse {
    data: ProductType[];
    
}