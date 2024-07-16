// CategoryListScreen.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CategoryList from '.'; // Adjust import path as per your project structure

type CategoryListScreenProps = {
    route: {
        params: {
            index: number;
        };
    };
};

const CategoryListScreen: React.FC<CategoryListScreenProps> = ({ route }) => {
    const { index } = route.params;

    return (
        <View style={styles.container}>
            <CategoryList id={index} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CategoryListScreen;
