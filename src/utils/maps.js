import { crucibleOfBattleMaps } from "./crucible";
import { hammerAndAnvilMaps } from "./hammerAndAnvil";
import { searchAndDestroyMaps } from "./searchAndDestroy";
import { sweepingEngagementMaps } from "./sweepingEngagement";
import { tippingPointMaps } from "./tippingPoint";

export const maps =  ({deployment}, selectedTournamentType) => {
    
    let maps;
    switch (deployment) {
        case 'Search & Destroy':
            maps = searchAndDestroyMaps;
            break;
        case 'Hammer & Anvil':
            maps = hammerAndAnvilMaps;
            break;
        case 'Crucible of Battle':
            maps = crucibleOfBattleMaps;
            break;
        case 'Sweeping Engagement':
            maps = sweepingEngagementMaps;
            break;
        case 'Tipping Point':
            maps = tippingPointMaps;
            break;    
        default:
            maps = [];
    }
    if(selectedTournamentType === "Freak Wars"){
        maps = maps.filter((map) => map.table === 5 | map.table === 3 ? false : true)
        console.log(maps)
        return maps.filter((map) => map.table === 5 | map.table === 3 ? false : true)
    }   
    return maps;
} 




