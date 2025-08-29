import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

interface Item {
  id: string;
  name: string;
  brand: string;
  category: string;
  subCategory: string;
}

const ItemCard = ({ id, name, brand, category, subCategory }: Item) => {
  return (
    <TouchableOpacity
      className="bg-white rounded-xl shadow-md p-4 m-2 border border-gray-200"
      activeOpacity={0.8}
    >
      {/* Item Name */}
      <Text className="text-lg font-bold text-gray-900 mb-2">{name}</Text>

      {/* Brand */}
      <Text className="text-sm text-gray-500 mb-2">Brand: {brand}</Text>

      {/* Categories */}
      <View className="flex-row flex-wrap gap-2">
        <View className="bg-green-100 px-2 py-1 rounded-full">
          <Text className="text-green-800 text-xs">{category}</Text>
        </View>
        <View className="bg-blue-100 px-2 py-1 rounded-full">
          <Text className="text-blue-800 text-xs">{subCategory}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;
