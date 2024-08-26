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
            return maps.filter((map) => map.table === 5 | map.table === 3 ? false : true);
        case assemble2025:
            return getMapsForAssemblePerDeployment(deployment, maps);
        default:
            return maps;
    }
} 

//Only for the assemble tournament
const getMapsForAssemblePerDeployment = (deployment, maps) => {
    console.log(deployment)
    if(deployment === crucibleOfBatle){
        return maps.filter((map) => map.table === 1 | map.table === 8 ? false : true);
    }
    return maps.filter((map) => map.table === 2 | map.table === 7 ? false : true);
}

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




