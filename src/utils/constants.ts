import { Dimensions } from "react-native"


const  {width , height}  = Dimensions.get('window');
export const SIZES = {
    base : 30,
    width,
    height,

    h1 : 22,
    h2 : 20,
    h3 : 18,
    h4 : 16,
    h5 : 14,
    h6 : 12
};

export const COLORS = {
    white : '#fff',
    black : '#000',
    blue : '#5D5FEE',
    grey : '#BABBC3',
    light : '#F3F4FB',
    darkBlue : '#7978B5',
    red : 'red',
    primary : '#f52d56',
    title : '#072F4A'
};


