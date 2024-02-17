export interface Image {
    id: number
    url: string
    description: string
}

export interface ImageSearchSlice {
    value: Image[],
    status: 'loading' | 'success' | 'failed',
    error: string | null
}

export interface ImageFetchData {
    id: number
    urls: {
        small: string,
        [name: string]: any
    }
    alt_description: string

    [name: string]: any
}