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
    data : ProductType[];
}

export interface LoginType {
    email : string , 
    password : string
}

export interface SignupType {
    first_name	: string,
    last_name	: string,
    email	: string,
    password	: string,
    confirm_password	: string,
    gender	: string,
    phone_no	: string,

}