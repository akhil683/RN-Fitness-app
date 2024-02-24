import axios from "axios";
import { rapidApiKey } from "../constants";

const baseURL = "https://exercisedb.p.rapidapi.com"

const apiCall = async (url) => {
   try {
      const options = {
         method: 'GET',
         url,
         params: {limit: '10'},
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