import axios from 'axios'


/**
 *
 */
class StatisticService {
    constructor() {
    }

    getStatistics = (region) =>{
        return axios.get('http://localhost:8080/brott/' + region.toLowerCase());
    };

    getCrime = (region) =>{
        return axios.get('http://localhost:8080/feed/' + region.toLowerCase());
    };

}

//This is to make our service a singleton
var statService = new StatisticService();
export default statService;