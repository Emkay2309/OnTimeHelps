import { NavigationProp } from "@react-navigation/core";
import { ImageSourcePropType } from "react-native";


export interface OnboardScreenProps {
    navigation : NavigationProp<any>
}

export  type SlideType = {
    id: number;
    title: string;
    description: string;
    image: ImageSourcePropType;
}