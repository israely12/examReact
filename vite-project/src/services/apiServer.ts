import axios from 'axios'
import { Mission } from '../types/mission'

const BASE_URL = "https://reactexambackend.onrender.com/missions/";
const API_KEY = import .meta.env.VITE_API_KEY;
export const getMissions = async () : Promise<Mission[]> => {
    try {
        const response = await axios.get(BASE_URL+API_KEY);
        return response.data
       
    } catch (error) {
        throw new Error("Failed to fetch missions");
        
    }

}

export const addMission = async (mission: Mission) : Promise<String> => {
    try {
        const response = await axios.post(BASE_URL, mission);
        return "Success"
    } catch (error) {
        throw new Error("Failed to add mission");
    }
}


export const updateMission = async (apiKey : String,missionId: String) : Promise<void> => {
    try {
        const response = await axios.post(BASE_URL+apiKey+"/progress"+missionId);
    } catch (error) {
        throw new Error("Failed to update mission");
    }
}

export const deleteMission = async (apiKey : String,missionId: String) : Promise<void> => {
    try {
        const response = await axios.delete(BASE_URL+apiKey+"/"+missionId);
    } catch (error) {
        throw new Error("Failed to delete mission");
    }
}