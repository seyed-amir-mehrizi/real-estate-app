
import axios from 'axios';
export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const {data} = await axios.get(url, {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'fbe5caee73msh6b742e7f103c335p1834c9jsn2084d45e1af4'
        }
    })

    return data;
}