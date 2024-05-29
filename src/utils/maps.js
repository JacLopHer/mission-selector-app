import { crucibleOfBattleMaps } from "./crucible";
import { hammerAndAnvilMaps } from "./hammerAndAnvil";
import { searchAndDestroyMaps } from "./searchAndDestroy";
import { sweepingEngagementMaps } from "./sweepingEngagement";

export const maps =  ({deployment}) => {
    switch (deployment) {
        case 'Search & Destroy':
            return searchAndDestroyMaps;
        case 'Hammer & Anvil':
            return hammerAndAnvilMaps;
        case 'Crucible of Battle':
            return crucibleOfBattleMaps;
        case 'Sweeping Engagement':
            return sweepingEngagementMaps;    
        default:
            return [];
    }
} 




