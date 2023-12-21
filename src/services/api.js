import axios from "axios";

export const blogApi = axios.create({
    baseURL: "https://blog-fake-api.onrender.com",
    timeout: 8 * 1000,
})

export const contactApi = axios.create({
    baseURL: "https://contact-fake-api.onrender.com",
    timeout: 8 * 1000,
})