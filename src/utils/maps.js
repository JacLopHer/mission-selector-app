import { assemble2025, crucibleOfBatle, freakWars, hammerAndAnvil, searchAndDestroy, sweepingEngagement, tippingPoint } from "../constants/constants";
import { crucibleOfBattleMaps } from "./maps/crucible";
import { hammerAndAnvilMaps } from "./maps/hammerAndAnvil";
import { searchAndDestroyMaps } from "./maps/searchAndDestroy";
import { sweepingEngagementMaps } from "./maps/sweepingEngagement";
import { tippingPointMaps } from "./maps/tippingPoint";

export const maps =  ({deployment}, selectedTournamentType) => {
    let maps = getMapsForDeployment(deployment)
    switch(selectedTournamentType){
        case freakWars:
            return filterMaps(maps,3,5);
        case assemble2025:
            return getMapsForAssemblePerDeployment(deployment, maps);
        default:
            return maps;
    }
} 

//Only for the assemble tournament
const getMapsForAssemblePerDeployment = (deployment, maps) => deployment === crucibleOfBatle ? filterMaps(maps,1,8) : filterMaps(maps,2,7);


const getMapsForDeployment = (deployment) => {
    switch (deployment) {
        case searchAndDestroy:
            return searchAndDestroyMaps;
        case hammerAndAnvil:
            return hammerAndAnvilMaps;
        case crucibleOfBatle:
            return crucibleOfBattleMaps;
        case sweepingEngagement:
            return sweepingEngagementMaps;
        case tippingPoint:
            return tippingPointMaps;    
        default:
            return [];
    }
}

//filters the 2 maps decided by the organization for 6man teams
const filterMaps = (maps,map1, map2) => maps.filter((map) => map.table === map1 | map.table === map2 ? false : true);



