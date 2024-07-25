import { StackScreenProps } from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {

    //Initial screens
    AppNavigator: undefined;
    Onboarding: undefined;
    LogIn: undefined;
    Register: undefined;
    ForgotPassword: undefined;
    BottomTab: undefined;

    //Stacks inside Bottom Tabs Navigator
    HomeStack: undefined;
    CartStack: undefined;
    ProfileStack: undefined;

    //Home stacks screens
    Home: undefined;
    Category: {
        product_category_id: number | undefined;
        categoryName: string | undefined;
    };
    ProductDetail: { product_id: number; };
    

    //Cart stacks screens
    Cart: undefined;
    Address: undefined;
    AddAddress: { id: string };
    Payment: { id: string };

    //Profile stacks screens
    ChangePassword: undefined;
    UpdateDetails: undefined;
    Profile: undefined;
    OrderList: undefined;
    OrderDetail: { order_id: number; created: string };
    
};

export type AppNavigationScreenProp = 
    StackScreenProps<RootStackParamList,'AppNavigator'>;


export type ProfileScreenNavigationProp =
    StackScreenProps<RootStackParamList, 'Profile'>;

export type OnboardingScreenNavigationProp =
    StackScreenProps<RootStackParamList, 'Onboarding'>;

export type RegisterScreenNavigationProp =
    StackScreenProps<RootStackParamList, 'Register'>;

export type ForgotPasswordScreenNavigationProp =
    StackScreenProps<RootStackParamList, 'ForgotPassword'>;

export type BottomTabNavScreenNavigationProp =
    StackScreenProps<RootStackParamList, 'BottomTab'>;

export type HomeStackScreenNavigationProp =
    StackScreenProps<RootStackParamList, 'HomeStack'>;

export type CartStackScreenNavigationProp =
    StackScreenProps<RootStackParamList, 'CartStack'>;

export type ProfileStackScreenNavigationProp =
    StackScreenProps<RootStackParamList, 'ProfileStack'>;

export type HomeScreenNavigationProp =
    StackScreenProps<RootStackParamList, 'Home'>;

export type CartScreenNavigationProp =
    StackScreenProps<RootStackParamList, 'Cart'>;

export type SignInScreenNavigationProp =
    StackScreenProps<RootStackParamList, 'SignIn'>;

export type CategoryScreenNavigationProp =
    StackScreenProps<RootStackParamList, 'Category'>;

export type CategoryScreenRouteProp =
    RouteProp<RootStackParamList, 'Category'>;

export type ProductDetailScreenNavigationProp =
    RouteProp<RootStackParamList, 'ProductDetail'>;

export type ChangePasswordScreenNavigationProp =
    StackScreenProps<RootStackParamList, 'ChangePassword'>;

export type UpdateDetailsScreenNavigationProp =
    StackScreenProps<RootStackParamList, 'UpdateDetails'>;

export type OrderListScreenNavigationProp =
    StackScreenProps<RootStackParamList, 'OrderList'>;

export type OrderDetailScreenNavigationProp =
    StackScreenProps<RootStackParamList, 'OrderDetail'>;

export type AddressScreenNavigationProp =
    StackScreenProps<RootStackParamList, 'Address'>;

export type AddAddressScreenNavigationProp =
    StackScreenProps<RootStackParamList, 'AddAddress'>;

export type PaymentScreenNavigationProp =
    StackScreenProps<RootStackParamList, 'Payment'>;

