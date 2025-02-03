import { assemble2025, campingNauta, crucibleOfBatle, freakWars, hammerAndAnvil, searchAndDestroy, sweepingEngagement, talavera2024, tippingPoint, vitoria, warmaster } from "../constants/constants";
import { crucibleOfBattleMaps, crucibleOfBattleMapsTalavera, crucibleOfBattleMapsVitoria } from "./maps/crucible";
import { hammerAndAnvilMaps, hammerAndAnvilMapsVitoria } from "./maps/hammerAndAnvil";
import { searchAndDestroyMaps, searchAndDestroyMapsTalavera, searchAndDestroyMapsVitoria } from "./maps/searchAndDestroy";
import { sweepingEngagementMaps } from "./maps/sweepingEngagement";
import { tippingPointMaps, tippingPointMapsTalavera } from "./maps/tippingPoint";
import { warmasterMaps } from "./maps/warmaster";

export const maps =  ({deployment, round}, selectedTournamentType) => {
    let maps =getTournamentMaps(selectedTournamentType, round, deployment);
    switch(selectedTournamentType){
        case freakWars:
            return filterMaps(maps,3,5);
        case assemble2025:
            return getMapsForAssemblePerDeployment(deployment, maps);
        default:
            return maps;
    }
}

const getTournamentMaps = (selectedTournamentType, round, deployment) => {
    switch(selectedTournamentType) {
        case vitoria:
            return getMapsForDeploymentVitoria(deployment);
        case talavera2024:
            return getMapsForDeploymentTalavera(deployment);
        case warmaster | campingNauta:
            return getMapsForRoundWarmaster(round);
        case campingNauta:
            return getMapsForRoundWarmaster(round);    
        default:
            return getMapsForDeployment(deployment);
    }
}

//Warmaster maps
const getMapsForRoundWarmaster = (round) => warmasterMaps.filter(map => map.table === round)
//

//Only for the assemble tournament
const getMapsForAssemblePerDeployment = (deployment, maps) => deployment === crucibleOfBatle ? filterMaps(maps,1,8) : filterMaps(maps,2,7);

//generic
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

//For vitoria
const getMapsForDeploymentVitoria = (deployment) => {
    switch (deployment) {
        case searchAndDestroy:
            return searchAndDestroyMapsVitoria;
        case hammerAndAnvil:
            return hammerAndAnvilMapsVitoria;
        case crucibleOfBatle:
            return crucibleOfBattleMapsVitoria;   
        default:
            return [];
    }
}


//For Talavera

const getMapsForDeploymentTalavera = (deployment) => {
    switch (deployment) {
        case searchAndDestroy:
            return searchAndDestroyMapsTalavera;
        case tippingPoint:
            return tippingPointMapsTalavera;
        case crucibleOfBatle:
            return crucibleOfBattleMapsTalavera;   
        default:
            return [];
    }
}
//filters the 2 maps decided by the organization for 6man teams
const filterMaps = (maps,map1, map2) => maps.filter((map) => map.table === map1 | map.table === map2 ? false : true);




