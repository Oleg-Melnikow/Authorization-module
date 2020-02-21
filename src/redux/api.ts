import axios from "axios";

const instance = axios.create({
    baseURL: "https://dry-forest-56016.herokuapp.com/",
});

export interface Data {
    id: string,
    email: string,
    password: string,
    rememberMe: boolean,
    isAdmin: boolean,
    created: string,
    updated: string,
    token: string,
    tokenDeathTime: string,

}

export interface IResponseData {
    users: Array<Data>
}

export const api = {
    async getUsers(): Promise<Array<Data>> {
        let result = await instance.get<IResponseData>("users")
        return result.data.users
    }
}