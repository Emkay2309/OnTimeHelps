import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useGetProductByCategoryQuery } from '../../redux/apis/api';

type CategoryListProps = {
  id: number;
};

const CategoryList: React.FC<CategoryListProps> = ({ id }) => {
  const index = id.toString(); 
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
