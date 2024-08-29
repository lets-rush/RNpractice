import React from "react";
import { Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
interface Props {
    title: string
    buttonStyle?: ViewStyle | ViewStyle[]
    disabled?: boolean
    textStyle?: TextStyle | TextStyle[]
    onPress: any
}
const CustomButton = (props: Props) => {
    return (

        <TouchableOpacity style={[props.buttonStyle]} onPress={props.onPress} disabled={props.disabled}>
            <Text style={[props.textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;