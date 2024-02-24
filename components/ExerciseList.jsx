import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useRouter } from 'expo-router'
import { ScrollView } from 'react-native-virtualized-view'
import { Image } from 'expo-image'
import { bodyParts } from '../constants'

export default function ExerciseList ({ data  }) {
   const router = useRouter();

   return (
    <ScrollView>
      {/* <ExerciseCard /> */}
      <FlatList 
         data={bodyParts}
         numColumns={2} 
         keyExtractor={item => item.name}
         showsVerticalScrollIndicator={false}
         contentContainerStyle={{paddingBottom: 60, paddingTop: 20}}
         columnWrapperStyle={{
            justifyContent: 'space-between'
         }} 
         renderItem={({ item, index }) => <ExerciseCard  index={index} item={item} router={router} />}
      />

    </ScrollView>
   )
}

const ExerciseCard = ({ item, index, router }) => {

   return (
      <View>
         <TouchableOpacity onPress={() =>router.push({ pathname: '/exerciseDetails', params: item})} className="flex py-3 spae-y-2">
            <View className="shadow rounded-[25px]">
               {/* <Image 
                  source={{ uri: item?.gifUrl }}
                  contentFit='cover'
                  style={{width: wp(44), height: wp(52)}}
                  className="rounded-[25px]"
               /> */}
               <Text
                  style={{fontSize: hp(1.7)}} 
                  className=" text-center text-neutral-700 font-semibold mt-1 tracking-wide"
               >  
               Hello Guys
                  {/* {item?.name?.length>20 ? item.name.slice(0,20)+"..." : item.name}  */}
               </Text>
            </View>
         </TouchableOpacity>
      </View>
   )
}