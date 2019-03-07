import axios from 'axios'

const KEY = 'AIzaSyCQN3CBODXxD8wXyxzEsBgBu6bwvN5DGBw';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY,
        type:'video'
    }
})