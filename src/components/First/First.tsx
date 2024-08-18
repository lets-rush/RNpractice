import React from "react";
import { SafeAreaView, StyleSheet, View, ViewStyle } from "react-native";

interface Props {
    children: any;
    containerStyles?: ViewStyle | ViewStyle[];
}

export const First = (props: Props) => {

    return (
        <SafeAreaView style={[styles.container, props.containerStyles]}>
            {props.children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white', alignItems: 'stretch' },
})