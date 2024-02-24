import axios from "axios";
import { rapidApiKey } from "../constants";

const baseURL = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back"

const apiCall = async (url, params) => {
   try {
      const options = {
         method: 'GET',
         url,
         params,
         headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
         }
      }
      const response = await axios.request(options)
      return response.data;

   } catch (e) {
      console.log("error: " + e)
   }
}
export const fetchExercisesByBodypart = async (bodyPart) => {
   let data = await apiCall(baseURL + `/exercises/bodyPart/${bodyPart}`)
   return data;
}