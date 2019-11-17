import axios from 'axios';

// 1. HTTP Request & Responseㅇㅘ 관련된기본 설정
const config = {
    baseUrl: 'https://3xpgnw3h24.execute-api.ap-northeast-2.amazonaws.com/dev/',
}

// 2. API  함수들을 정리
function fetchChartsList() {
    // return axios.get(config.baseUrl + '');
    return axios.get(`${config.baseUrl}artists/be`);
}

function fetchMusicsList() {
    // return axios.get(config.baseUrl + '');
    return axios.get(`${config.baseUrl}songs/love`);
}

function fetchArtistsList() {
    // return axios.get(config.baseUrl + '');
    return axios.get(`${config.baseUrl}artists/ak`);
}
export {
    fetchChartsList,
    fetchMusicsList,
    fetchArtistsList
}