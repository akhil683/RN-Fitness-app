import { Ionicons } from '@expo/vector-icons'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { fetchExercisesByBodypart } from '../api/exerciseDB' 
import ExerciseList from '../components/ExerciseList'

export default function Exercises() {
   const router = useRouter()
   const item = useLocalSearchParams()   
   const [ exercises, setExercises ] = useState([])

   useEffect(() => {
      if(item) getExercises(item.name)
   }, [item])

   const getExercises = async (bodyPart) => {
      let data = await fetchExercisesByBodypart(bodyPart)
      setExercises(data)
   }

   return (
      <ScrollView>
         <StatusBar style="light"/>
         <Image
            source={item.image}
            style={{width: wp(100), height: hp(45)}}
            className="rounded-b-[40px]"
          />
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-rose-500 mx-4 absolute rounded-full flex justify-center items-center pr-1" 
            style={{height: hp(5,5), width: hp(5.5), marginTop: hp(7)}}
          >
            <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
          </TouchableOpacity>

          {/* exercises */}
          <View className="mx-4 space-y-3">

            <Text style={{fontSize: hp(3)}} className="font-semibold text-neutral-700" >
               {item.name} Exercises
            </Text>
            <View className="mb-10">
               <ExerciseList data={exercises} />
            </View>

          </View>
      </ScrollView>
   )
}