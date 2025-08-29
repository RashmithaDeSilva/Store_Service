import { View, Text, ScrollView, ActivityIndicator, Image, FlatList } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import useFatch from '@/hooks/useFatch';
import { fatchItems } from '@/services/api';
import { icons } from '@/constants/icons';
import ItemCard from '@/components/ItemCard';
import SearchBar from '@/components/SearchBar';


const index = () => {
  const router = useRouter();

  const { 
    data: items,
    loading: itemsLoading,
    error: itemsError
  } = useFatch(() => fatchItems({ query: '' }));

  return (
    <View className="flex-1 bg-primary mt-10">
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={ false }
        contentContainerStyle={{
          minHeight: '100%',
          paddingBottom: 10,
        }}
      >
        {/* Logo */}
        <Image 
          source={ icons.logo }
          className="w-20 h-20 mt-20 mb-5 mx-auto"
        />
        
        {
          itemsLoading ? 
          (
            <ActivityIndicator 
              size='large'
              color='#0000FF'
              className="mt-10 self-center"
            />
          ) : 
          itemsError ? 
          (
            <Text className="text-lg text-red-500 font-bold mt-5 mb-3">
              Error: { itemsError?.message }
            </Text>
          ) :
          (
            <View>
              <SearchBar 
                onPress={ () => router.push('/search') }
                placeholder='Search items ...'
              />

              <FlatList 
                data={ items }
                renderItem={({ item }) => (
                  <ItemCard { ...item } />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={ 1 }
                className="mt-5 pb-5"
                scrollEnabled={ false }
              />
            </View>
          ) 
        }
        <View className='h-32'></View>
      </ScrollView>
    </View>
  )
}

export default index;