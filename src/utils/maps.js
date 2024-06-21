import { crucibleOfBattleMaps } from "./crucible";
import { hammerAndAnvilMaps } from "./hammerAndAnvil";
import { searchAndDestroyMaps } from "./searchAndDestroy";
import { sweepingEngagementMaps } from "./sweepingEngagement";
import { tippingPointMaps } from "./tippingPoint";

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
        case 'Tipping Point':
            return tippingPointMaps;    
        default:
            return [];
    }
} 




