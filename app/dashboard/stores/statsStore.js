import statsService from '../services/StatsService'



export default class StatStore  {

    crimeStatsArray;
    statisticsArray;

    constructor(){
        this.crimeStatsArray = [];
        this.statisticsArray = [];
    };

    subscribeStatsFromServer = (region) =>{
        var self = this;
        statsService.getStatistics(region).then(function(response){
            self.statisticsArray = response;
        })
    };

    subscribeStatsFromServer = (region) =>{
        var self = this;
        statsService.getCrime(region).then(function(response){
            self.crimeStatsArray = response;
        })
    };

}

//Building a singleton store
var statsStore = new StatStore();
export default statsStore;