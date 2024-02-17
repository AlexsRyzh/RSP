import axios from "axios";

export const unsplashAxios = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {'Authorization': 'Client-ID 3eqBZlvhwGKQO6CLQl-XnHvGOBBBt7j68Ifyw8Biu9A'}
})
