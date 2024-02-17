import {unsplashAxios} from "@/http/axiosUnsplash";

class ImageService {

    public static async searchImage(query: string) {
        return unsplashAxios.get('search/photos', {
            params: {
                query: query,
            }
        })
    }
}

export {ImageService}