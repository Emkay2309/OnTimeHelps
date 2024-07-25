import {AddressType} from '../authslicer/type';

export interface OrderType {
  status: number;
  message: string;
  user_msg: string;
}

export interface OrderItemType {
  id: number;
  cost: number;
  created: string;
}

export interface OrderListType {
  status: number;
  data: OrderItemType[];
  message: string;
  user_msg: string;
}

export interface OrderDetailsType {
  status: number;
  data: OrderDetailsDataType;
}

export interface OrderDetailsDataType {
  id: number;
  cost: number;
  address: string;
  created: string;
  order_details: OrderProductItemType[];
}

export interface OrderProductItemType {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  total: number;
  prod_name: string;
  prod_cat_name: string;
  prod_image: string;
}

export interface InitialStateType {
  orderData: OrderType | null;
  orderList: OrderListType | null;
  orderDetails: OrderDetailsType | null;
  isLoading: boolean;
  isError: boolean;
}

export interface PlaceOrderParamsType {
  access_token: string | undefined;
  address: AddressType | undefined;
}

export interface GetOrderListParamsType {
  access_token: string | undefined;
}

export interface GetOrderDetailsParamsType {
  access_token: string | undefined;
  order_id: number;
}