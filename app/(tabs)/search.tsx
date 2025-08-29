import { View, Text, TextInput, ScrollView, Image, ActivityIndicator, FlatList } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import useFatch from '@/hooks/useFatch';
import { fatchItems } from '@/services/api';
import { icons } from '@/constants/icons';
import SearchBar from '@/components/SearchBar';
import ItemCard from '@/components/ItemCard';


const search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<TextInput>(null);
  const isFocused = useIsFocused();

  const { 
    data: items,
    loading: itemsLoading,
    error:itemsError,
    refatch: itemsReload,
    reset: itemsClean
  } = useFatch(() => fatchItems({ query: searchQuery }), false);

  useEffect(() => {
    const timeoutId = setTimeout(
      async () => {
        if(searchQuery.trim()) {
          await itemsReload();

        } else {
          itemsClean();
        }
      },
      800
    );

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  useEffect(() => {
    if (isFocused) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 500);
    }
  }, [isFocused]);

  
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
                ref={ inputRef }
                value={ searchQuery }
                onChangeText={(text: string) => setSearchQuery(text)}
                placeholder='Search items ...'
              />

              {/* Search term */}
              {
                searchQuery.trim() !== '' ? (
                  <Text className='text-lg text-black font-bold mt-5 mb-3'>
                    Search Results for { '' }
                    <Text className='text-xl text-darkAccent'>{ searchQuery }</Text>
                  </Text>
                ) : null
              }

              <FlatList 
                data={ items }
                renderItem={({ item }) => (
                  <ItemCard { ...item } />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={ 1 }
                className="mt-5 pb-5"
                scrollEnabled={ false }
                ListEmptyComponent={
                  (
                    <View className='mt-10 px-5 justify-center items-center flex'>
                      {
                        items?.length <= 0 ? 
                          <Text className='text-center text-black'>No items found</Text> :
                          <Text className='text-center text-black'>Search for a items</Text>
                      }
                    </View>
                  )
                }
              />
            </View>
          ) 
        }
        <View className='h-32'></View>
      </ScrollView>
    </View>
  )
}

export default search;