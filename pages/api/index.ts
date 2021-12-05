import axios from 'axios'

export const moviesAPI = {
    getComedies() {
        return axios.get<MoviesResponseType>(`https://api.themoviedb.org/3/discover/movie?with_genres=35`, {
            params: {
                api_key: '30681930d9f8a4d49ec75249be9647a1',
                language: 'en_US',
                page: 1,
            }
        })
            .then(res => res.data['results'])
    }
}

//types
type MoviesResponseType = {
    'page': number
    'results': MovieResponseType[]
}
//types
export type MovieResponseType = {
    "adult": boolean
    "backdrop_path": string
    "genre_ids": number[]
    "id": number
    "original_language": string
    "original_title": string
    "overview": string
    "popularity": number
    "poster_path": string
    "release_date": string
    "title": string
    "video": boolean
    "vote_average": number
    "vote_count": number
}
