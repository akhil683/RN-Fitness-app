import { Image } from 'expo-image'
import { useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function exerciseDetails() {

   const item = useLocalSearchParams()
   console.log(item)

   return (
    <View className="flex flex-1">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
         <Image 
            source={{ uri: item.image}}
            contentFit='cover'
            style={{width: wp(100), height: wp(100) }}
            className="rounded-b-[40px]"
         />
      </View>
    </View>
  )
}