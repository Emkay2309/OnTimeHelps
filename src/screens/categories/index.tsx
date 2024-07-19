import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useGetProductByCategoryQuery } from '../../redux/apis/api';
import { RootStackParamList } from '../../navigators/AppNavigator';
import { StackScreenProps } from '@react-navigation/stack';




const CategoryList = ({ route ,navigation} : StackScreenProps<RootStackParamList,'CategoryList'> ) => {
    const index = route.params.id.toString();
    const { data, error, isLoading } = useGetProductByCategoryQuery(index);

    if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;

    return (
        <FlatList
            data={data?.data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                    <View><Text>----------------</Text></View>
                </View>
            )}
        />
    );
};

export default CategoryList;
