
export interface UserDataType {
  id: number;
  role_id: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  profile_pic: string | null;
  country_id: number | null;
  gender: 'M' | 'F';
  phone_no: string;
  dob: string | null;
  is_active: boolean;
  created: string;
  modified: string;
  access_token: string;
}

export interface UserType {
  status: number;
  data: UserDataType | null;
  message: string;
  user_msg: string;
}

export interface ForgotPassDataType {
  status: number;
  message: string;
  user_msg: string;
}

export interface ChangePassDataType {
  status: number;
  data: [] | null;
  message: string;
  user_msg: string;
}

export interface ProductCategoryType {
  id: number;
  name: string;
  icon_image: string;
  created: string;
  modified: string;
}

interface IData {
  user_data: UserDataType;
  product_categories: ProductCategoryType[];
  total_carts: number;
  total_orders: number;
}

export interface UserAccountDetailsType {
  status: number;
  data: IData | null;
  message: string;
  user_msg: string;
}

export interface AddressType {
  firstLine: string;
  secondLine: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  type: string;
}

export interface AddressObjType {
  id: string;
  address: AddressType;
}

export interface AddressListType {
  addressList: AddressObjType [] | [];
  lastSelectedAddressId: string;
}

export interface InitialStateType {
  user: UserType | null;
  isLoading: boolean;
  isError: boolean;
  forgotPassData: ForgotPassDataType | null;
  changePassData: ChangePassDataType | null;
  updateDetailsData: UserType | null;
  userAccountDetails: UserAccountDetailsType | null;
  addressData: AddressListType;
}

export interface RegistrationFormDataType {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  gender: string;
  phone_no: string;
}

export interface SignInFormDataType {
  email: string;
  password: string;
}

export interface ChangePasswordParamsType {
  access_token: string | undefined;
  old_password: string;
  password: string;
  confirm_password: string;
}

export interface ForgotPasswordParamsType {
  password: string;
}

export interface UpdateDetailsFormDataType {
  first_name: string | undefined;
  last_name: string | undefined;
  email: string | undefined;
  dob: string | null | undefined;
  profile_pic: string | null | undefined;
  phone_no: string | undefined;
  access_token: string | undefined;
}