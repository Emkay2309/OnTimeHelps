interface ProductType {
    id: number;
    name: string;
    cost: number;
    product_category: string;
    product_images: string;
    sub_total: number;
  }
  
  export interface CartItemType {
    id: number;
    product_id: number;
    quantity: number;
    product: ProductType;
  }
  
  interface CartType {
    status: number;
    data: CartItemType[] | null;
    count: number;
    total: number;
    message: string;
    user_msg: string;
  }
  
  export interface IInitialState {
    cart: CartType | null;
    status: number | null;
    data: boolean;
    total_carts: number;
    message: string;
    user_msg: string;
    isLoading: boolean;
    isCartUpdating: boolean;
    isCartItemDeleting: boolean;
    isError: boolean;
  }
  
  export interface AddToCartParamsType {
    access_token: string | undefined;
    product_id: number;
    quantity: number;
  }
  
  export interface GetCartListParamsType {
    access_token: string | undefined;
  }
  
  export interface DeleteCartParamsType {
    access_token: string | undefined;
    product_id: number;
  }