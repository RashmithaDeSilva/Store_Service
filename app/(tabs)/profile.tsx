import { View, Text, Image } from 'react-native';
import React from 'react';
import { icons } from '@/constants/icons';


const profile = () => {
  return (
    <View className='bg-primary flex-1 px-10'>
      <View className='flex justify-center items-center flex-1 flex-col'>
        <Image 
          source={ icons.save }
          className='size-10'
          tintColor={ '#4ade80' }
        />
        <Text className='text-text text-base mt-2'>Profile</Text>
      </View>
    </View>
  )
}

export default profile;