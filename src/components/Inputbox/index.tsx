import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React, { FunctionComponent, useState } from 'react'
import { InputsProps } from './types'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const InputBox: FunctionComponent<InputsProps> = ({ icon, label, isPassword, ...props }) => {
    const [bg, setBg] = useState<string>('lightyellow');
    const [hidden, setHidden] = useState<boolean>(true);

    const handleFocus = () => {
        props?.onFocus;
        setBg('pink');
    }

    const handleBlur = () => {
        props?.onBlur;
        setBg('lightyellow');
    }

    const handleIcon = () => {
        setHidden(!hidden);
    }

    return (

        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{label}</Text>
            </View>
            <View style={styles.inputContainer}>
                <MaterialCommunityIcons name={icon} size={30} color={'black'} style={styles.iconLogo}/>
                <TextInput
                    {...props}
                    style={[{ backgroundColor: bg }, props.style, styles.textInput]}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    secureTextEntry={isPassword && hidden}
                />
            </View>
            {
                isPassword && (
                    <TouchableOpacity onPress={handleIcon}>
                        <MaterialCommunityIcons name={hidden ? 'eye-off' : 'eye'} size={30} color={'black'} />
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

export default InputBox

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    labelContainer : {
        marginLeft: 28,
    },
    inputContainer : {

    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        width : 100

    },
    iconLogo: {
        position: 'absolute',
        top: 18,
        zIndex: 1,
        borderRightWidth: 1,
        paddingRight: 10,
        marginLeft: 30
    },
    textInput: {
        height: 60,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        marginVertical: 3,
        marginBottom: 10,
        padding: 15,
        paddingLeft: 65,
        paddingRight: 55,
        width: 320,
        fontSize: 16,
        marginHorizontal: 25
    }

})