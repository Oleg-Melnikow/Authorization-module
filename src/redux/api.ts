import axios from "axios";

const instance = axios.create({
    baseURL: "https://dry-forest-56016.herokuapp.com/",
});

export interface Data {
    email: string,
    name: string,
    isAdmin: boolean,
    password: string,
    rememberMe: boolean,
    token: string,
    tokenDeathTime: string,
    _id: string

}


export const signInAPI = {
    async login(email: string, password: string, rememberMe: boolean ): Promise<Data> {
        let result = await instance.post<Data>(`auth/login`,{email, password, rememberMe})
        return result.data
    }
}