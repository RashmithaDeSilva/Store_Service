import { View, ImageBackground, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';


const TabIcon = ({ focused, icon, title }: any) => {
    if(focused) {
       return (
            <ImageBackground 
                source={ images.highlight }
                className='flex flex-row flex-1 min-w-[90px] min-h-20 mt-6 
                    justify-center items-center rounded-full overflow-hidden'
            >
                <Image source={ icon } tintColor="#052e16" className='size-5' />
            </ImageBackground>
        ) 
    }

    return (
        <View className='size-full justify-center items-center mt-4 rounded-full'>
            <Image source={ icon } tintColor="#4ade80" className='size-5'/>
        </View>
    )
}

const _Layout = () => {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: '#052e16',
                borderRadius: 50,
                marginHorizontal: 20,
                marginBottom: 50,
                height: 60,
                position: 'absolute',
                overflow: 'hidden',
                borderWidth: 1,
                borderTopWidth: 1,
                borderColor: '#4ade80',
            },
            tabBarItemStyle: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }
        }}
    >
        <Tabs.Screen 
            name='index'
            options={{
                title: 'Home',
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        focused={ focused }
                        icon={ icons.home }
                        title="Home"
                    />
                ),
            }}
        />
        <Tabs.Screen 
            name='search'
            options={{
                title: 'Search',
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        focused={ focused }
                        icon={ icons.search }
                        title="Search"
                    />
                ),
            }}
        />
        <Tabs.Screen 
            name='saved'
            options={{
                title: 'Saved',
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        focused={ focused }
                        icon={ icons.save }
                        title="Saved"
                    />
                ),
            }}
        />
        <Tabs.Screen 
            name='profile'
            options={{
                title: 'Profile',
                tabBarIcon: ({ focused }) => (
                    <TabIcon 
                        focused={ focused }
                        icon={ icons.person }
                        title="Profile"
                    />
                ),
            }}
        />
    </Tabs>
  )
}

export default _Layout;