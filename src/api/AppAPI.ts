import { isAxiosError } from "axios";
import api from "../lib/axios";
import type { EmailType } from "../types";

export async function sendCotizationEmail(formData : EmailType) {
    try {
        const url = '/app/cotization'
        const {data} = await api.post(url, formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}