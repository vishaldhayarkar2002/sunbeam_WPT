import axios, { type AxiosResponse } from "axios";
import config from "../utils/config";
import type { UserSignInResponse } from "../types/User";

export function userSignIn(email: string, password: string): Promise<AxiosResponse<UserSignInResponse>> {
    const URL = config.BASE_URL + '/user/signin'
    const body = { email, password }
    return axios.post(URL, body)
}