import axios from "axios";
const backendUrl = "http://localhost:3000";

export const registerUser = async({name, email, dateOfBirth, password}) => {
    try{
        const reqUrl = `${backendUrl}/auth/register`;
        const response = await axios.post(reqUrl, {name, email, dateOfBirth, password});
        return response.data;
    }catch(error){
        return error;
    }
}


export const loginUser = async(email, password) => {
    try{
        const reqUrl = `${backendUrl}/auth/login`;
        const response = await axios.post(reqUrl, {email, password});
        return response.data;
    }catch(error){
        return error;
    }
}


export const getAllUsers = async() => {
    try{
        const reqUrl = `${backendUrl}/auth/get-users`;
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axios.get(reqUrl);
        return response.data;
    }catch(error){
        return error;
    }
}