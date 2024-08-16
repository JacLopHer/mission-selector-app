import { crucibleOfBatle, freakWars, hammerAndAnvil, searchAndDestroy, sweepingEngagement, tippingPoint } from "../constants/constants";
import { crucibleOfBattleMaps } from "./maps/crucible";
import { hammerAndAnvilMaps } from "./maps/hammerAndAnvil";
import { searchAndDestroyMaps } from "./maps/searchAndDestroy";
import { sweepingEngagementMaps } from "./maps/sweepingEngagement";
import { tippingPointMaps } from "./maps/tippingPoint";

export const maps =  ({deployment}, selectedTournamentType) => {
    let maps = getMapsForDeployment(deployment)

    if(selectedTournamentType === freakWars){
        return maps.filter((map) => map.table === 5 | map.table === 3 ? false : true)
    }   
    return maps;
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




