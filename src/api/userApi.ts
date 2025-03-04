import {postRequest} from "../helpers/api.request.ts";

class UserApi {
    constructor() {
    }

     async register(email: string, password: string, fullName: string, avatarUrl: string) {
        const response = await postRequest('auth/register', {email, password, fullName, avatarUrl});
        const data = await response;
     if (data.token) {
         localStorage.setItem("token", data.token);
         console.log("Токен сохранён!");
     }

         console.log("Пользователь зарегистрирован:", data);
    }

     async login(email: string, password: string) {
        const response = await postRequest('auth/login', {email, password});
        const data = await response;
         if (data.token) {
             localStorage.setItem("token", data.token);
             console.log("Токен сохранён!");
         }

         console.log("Пользователь вошел:", data);
        return data;
    }
}

export const userApi = new UserApi();