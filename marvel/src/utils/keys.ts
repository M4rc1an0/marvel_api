import md5 from "md5";

export const baseURL = 'http://gateway.marvel.com/v1/public/characters?'
export const publicKey = 'be230fcf0e904bcb9d803fdec48303fc'
export const privateKey = '85178cbd4619277355f8e9d98948899001a3415f'
export const time = Number(new Date());
export const hash = md5(time + privateKey + publicKey);

