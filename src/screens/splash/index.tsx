import { Text, View } from "react-native"
import { SplashScreenProps } from "./types";

const SplashScreen : React.FC<SplashScreenProps> = ({navigation} ) => {
    setTimeout(()=> {
        navigation.navigate('Onboard');
    },3000);
    return (
        <View style={{flex : 1 , justifyContent: 'center' , alignItems : 'center'}}>
            <Text style={{fontSize : 40}}>Splash Screen</Text>
        </View>
    )
}

export default SplashScreen;