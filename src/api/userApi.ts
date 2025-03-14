import {postRequest} from "../helpers/api.request.ts";

class UserApi {
    constructor () {
    }

    async register(email: string, password: string, fullName: string, avatarUrl: string) {
        try {
            const data = await postRequest("auth/register", { email, password, fullName, avatarUrl });

            if (data?.token) {
                localStorage.setItem("token", data.token);
                console.log("✅ Токен сохранён!");
            }

            console.log("Пользователь зарегистрирован:", data);
            return data;
        } catch (error) {
            console.error("Ошибка регистрации:", error);
        }
    }


    async login(email: string, password: string) {
        try {
            const data = await postRequest('auth/login', { email, password });
            if (data.token) {
                localStorage.setItem("token", data.token);
                return data;
            } else {
                throw new Error("Некорректный логин или пароль");
            }
        } catch (error) {
            console.error("Ошибка при входе:", error);
            throw error;
        }
    }


}

export const userApi = new UserApi ();