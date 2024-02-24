import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useRouter } from 'expo-router'
import { ScrollView } from 'react-native-virtualized-view'
import { Image } from 'expo-image'

export default function ExerciseList ({ data  }) {
   const router = useRouter();

   return (
    <View>
      <FlatList 
         // data={}
         numColumns={2}
         keyExtractor={item => item.name}
         showsVerticalScrollIndicator={false}
         contentContainerStyle={{paddingBottom: 60, paddingTop: 20}}
         columnWrapperStyle={{
            justifyContent: 'space-between'
         }} 
         renderItem={({ item, index }) => <ExerciseCard  index={index} item={item} router={router} />}
      />

    </View>
   )
}

const ExerciseCard = ({ item, index, rouer }) => {

   return (
      <View>
         <TouchableOpacity>
            <View>
               <Image 
               />
            </View>
         </TouchableOpacity>
      </View>
   )
}