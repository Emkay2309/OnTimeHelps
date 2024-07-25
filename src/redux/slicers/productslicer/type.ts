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

export interface CategoryType {
    status: number;
    data: ProductType[] | [];
}

export interface ProductImageType {
    id: number;
    product_id: number;
    image: string;
    created: string;
    modified: string;
}

export interface IndividualProductType {
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
    product_images: ProductImageType[];
}

export interface ProductDataType {
    status: number;
    data: IndividualProductType | null;
}

export interface GetCategoryListParamsType {
    product_category_id: number | undefined;
    limit?: Number;
    page?: Number;
}

export interface GetProductParamsType {
    product_id: number;
}

export interface SetProductRatingParamsType{
    product_id: number;
    rating: number;
}

export interface ProductRatingDataType {
    status: number;
    data: {
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
    };
    message: string;
    user_msg: string;
}

export interface InitialStateType {
    category: CategoryType | null;
    productData: ProductDataType | null;
    rating: ProductRatingDataType | null;
    isLoading: boolean;
    isError: boolean;
    isSettingRating: boolean;
}