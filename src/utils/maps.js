import { alpineCup, assemble2025, campingNauta, crucibleOfBatle, dawnOfWar, freakWars, hammerAndAnvil, mollerussa, searchAndDestroy, sweepingEngagement, talavera2024, tippingPoint, vitoria, warmaster } from "../constants/constants";
import { crucibleOfBattleMaps, crucibleOfBattleMapsAlpine, crucibleOfBattleMapsForMollerusa, crucibleOfBattleMapsTalavera, crucibleOfBattleMapsVitoria } from "./maps/crucible";
import { dawnOfWarOfBattleMaps } from "./maps/dawnOfWar";
import { hammerAndAnvilBattleMapsAlpine, hammerAndAnvilMaps, hammerAndAnvilMapsForMollerusa, hammerAndAnvilMapsVitoria } from "./maps/hammerAndAnvil";
import { searchAndDestroyBattleMapsAlpine, searchAndDestroyMaps, searchAndDestroyMapsForMollerusa, searchAndDestroyMapsTalavera, searchAndDestroyMapsVitoria } from "./maps/searchAndDestroy";
import { sweepingEngagementBattleMapsAlpine, sweepingEngagementMaps } from "./maps/sweepingEngagement";
import { tippingPointBattleMapsAlpine, tippingPointMaps, tippingPointMapsTalavera } from "./maps/tippingPoint";
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
        case mollerussa:
            return getMapsForDeploymentMollerusa(deployment);
        case vitoria:
            return getMapsForDeploymentVitoria(deployment);
        case talavera2024:
            return getMapsForDeploymentTalavera(deployment);
        case alpineCup:
            return getMapsForDeploymentAlpine(deployment)
        case warmaster:
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
        case dawnOfWar:
            return dawnOfWarOfBattleMaps;
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

//For Alpine
const getMapsForDeploymentAlpine = (deployment) => {
    switch (deployment) {
        case searchAndDestroy:
            return searchAndDestroyBattleMapsAlpine;
        case hammerAndAnvil:
            return hammerAndAnvilBattleMapsAlpine;
        case crucibleOfBatle:
            return crucibleOfBattleMapsAlpine;
        case sweepingEngagement:
            return sweepingEngagementBattleMapsAlpine;
        case tippingPoint:
            return tippingPointBattleMapsAlpine;    
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


//For Mollerusa 2025
const getMapsForDeploymentMollerusa = (deployment) => {
    switch(deployment) {
        case searchAndDestroy:
            return searchAndDestroyMapsForMollerusa;
        case hammerAndAnvil:
            return hammerAndAnvilMapsForMollerusa;
        case crucibleOfBatle:
            return crucibleOfBattleMapsForMollerusa
    }
}

//filters the 2 maps decided by the organization for 6man teams
const filterMaps = (maps,map1, map2) => maps.filter((map) => map.table === map1 | map.table === map2 ? false : true);




