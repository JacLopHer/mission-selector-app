
import { teams, freakWars, assemble2025, hammerAndAnvil, searchAndDestroy, crucibleOfBatle, vitoria, talavera2024, campingNauta, tippingPoint, sweepingEngagement, alpineCup, teamsAllDeployments, dawnOfWar } from './../constants/constants';

export const missions = (tournamentType) => {
  switch(tournamentType.name){
    case teamsAllDeployments:
      return teamAllMissions;
    case teams:
      return teamMissions;
    case talavera2024:
      return talaveraMissions;
    case vitoria:
      return vitoriaMissions;
    case freakWars:
      return freakWarsMissions;
    case assemble2025:
      return assemble2025Missions;
    case campingNauta:
      return campingNautaMissions;
    case alpineCup:
      return alpineCupMissions;
    default:
      return warmasterMissions;
  }  
} 


const alpineCupMissions = [
  {
    round: 1,
    primaryMission: "Linchpin",
    missionRule: "Fog of war",
    deployment: hammerAndAnvil,
  },
  {
    round: 2,
    primaryMission: "Scorched Earth",
    missionRule: "Swift action",
    deployment: searchAndDestroy,
  },
  {
    round: 3,
    primaryMission: "Purge the foe",
    missionRule: "Raise Banners",
    deployment: crucibleOfBatle,
  },
  {
    round: 4,
    primaryMission: "Burden of Trust",
    missionRule: "Inspired leadership",
    deployment: tippingPoint,
  },
  {
    round: 5,
    primaryMission: "Take and Hold",
    missionRule: "Smoke and Mirrors",
    deployment: sweepingEngagement,
  }
]

const talaveraMissions = [
  {
    round: 1,
    primaryMission: "Scorched Earth",
    missionRule: "Inspired Leadership",
    deployment: "Crucible of Battle",
  },
  {
    round: 2,
    primaryMission: "Linchpin",
    missionRule: "Swift Action",
    deployment: "Crucible of Battle",
  },
  {
    round: 3,
    primaryMission: "Purge the Foe",
    missionRule: "Smoke and Mirrors",
    deployment: "Tipping Point",
  },
  {
    round: 4,
    primaryMission: "Supply Drop",
    missionRule: "Fog of War",
    deployment: "Tipping Point",
  },
  {
    round: 5,
    primaryMission: "Linchpin",
    missionRule: "Raise Banners",
    deployment: "Search & Destroy",
  },
  {
    round: 6,
    primaryMission: "Take and Hold",
    missionRule: "Hidden Supplies",
    deployment: "Search & Destroy",
  },
  
]
const vitoriaMissions = [
  {
    round: 1,
    primaryMission: "Terraform",
    missionRule: "Stalwarts",
    deployment: crucibleOfBatle,
  },
  {
    round: 2,
    primaryMission: "Purge the Foe",
    missionRule: "Rapid Escalation",
    deployment: crucibleOfBatle,
  },
  {
    round: 3,
    primaryMission: "Burden of Trust",
    missionRule: "Hidden supplies",
    deployment: hammerAndAnvil,
  },
  {
    round: 4,
    primaryMission: "Linchpin",
    missionRule: "Raise Banners",
    deployment: searchAndDestroy,
  },
  {
    round: 5,
    primaryMission: "Take and Hold",
    missionRule: "Hidden Supplies",
    deployment: searchAndDestroy,
  }
]

const assemble2025Missions = [
  {
    round: 1,
    primaryMission: "The Ritual",
    missionRule: "Swift Action",
    deployment: "Crucible of Battle",
  },
  {
    round: 2,
    primaryMission: "Terraform",
    missionRule: "Stalwarts",
    deployment: "Crucible of Battle",
  },
  {
    round: 3,
    primaryMission: "Linchpin",
    missionRule: "Fog of War",
    deployment: "Tipping Point",
  },
  {
    round: 4,
    primaryMission: "Take and Hold",
    missionRule: "Hidden Supplies",
    deployment: "Search & Destroy",
  },
  {
    round: 5,
    primaryMission: "Burden of Trust",
    missionRule: "Prepared positions",
    deployment: "Search & Destroy",
  },
];

const freakWarsMissions =  [
  {
    round: 1,
    primaryMission: "Linchpin",
    missionRule: "Raise Banners",
    deployment: "Search & Destroy",
  },
  {
    round: 2,
    primaryMission: "Take and Hold",
    missionRule: "Hidden Supplies",
    deployment: "Search & Destroy",
  },
  {
    round: 3,
    primaryMission: "Purge the Foe",
    missionRule: "Smoke and Mirrors",
    deployment: "Tipping Point",
  },
  {
    round: 4,
    primaryMission: "The Ritual",
    missionRule: "Swift Action",
    deployment: "Crucible of Battle",
  },
  {
    round: 5,
    primaryMission: "Scorched Earth",
    missionRule: "Inspired Leadership",
    deployment: "Crucible of Battle",
  },
];

const teamMissions = [
    {
      round: 1,
      primaryMission: "Supply drop",
      missionRule: "Smoke and Mirrors",
      deployment: "Hammer & Anvil",
    },
    {
      round: 2,
      primaryMission: "Linchpin",
      missionRule: "Fog of War",
      deployment: "Tipping Point",
    },
    {
      round: 3,
      primaryMission: "Purge the Foe",
      missionRule: "Smoke and Mirrors",
      deployment: "Tipping Point",
    },
    {
      round: 4,
      primaryMission: "Linchpin",
      missionRule: "Raise Banners",
      deployment: "Search & Destroy",
    },
    {
      round: 5,
      primaryMission: "Take and Hold",
      missionRule: "Hidden Supplies",
      deployment: "Search & Destroy",
    },
    {
      round: 6,
      primaryMission: "The Ritual",
      missionRule: "Swift Action",
      deployment: "Crucible of Battle",
    },
    {
      round: 7,
      primaryMission: "Scorched Earth",
      missionRule: "Inspired Leadership",
      deployment: "Crucible of Battle",
    },
];

const teamAllMissions = [
  {
    round: 1,
    primaryMission: "Supply drop",
    missionRule: "Smoke and Mirrors",
    deployment: "Hammer & Anvil",
  },
  {
    round: 2,
    primaryMission: "Linchpin",
    missionRule: "Fog of War",
    deployment: "Tipping Point",
  },
  {
    round: 3,
    primaryMission: "Purge the Foe",
    missionRule: "Smoke and Mirrors",
    deployment: "Tipping Point",
  },
  {
    round: 4,
    primaryMission: "Linchpin",
    missionRule: "Raise Banners",
    deployment: "Search & Destroy",
  },
  {
    round: 5,
    primaryMission: "Take and Hold",
    missionRule: "Hidden Supplies",
    deployment: "Search & Destroy",
  },
  {
    round: 6,
    primaryMission: "The Ritual",
    missionRule: "Swift Action",
    deployment: "Crucible of Battle",
  },
  {
    round: 7,
    primaryMission: "Scorched Earth",
    missionRule: "Inspired Leadership",
    deployment: "Crucible of Battle",
  },
  {
    round: 8,
    primaryMission: "Burden of trust",
    missionRule: "Prepared Positions",
    deployment: dawnOfWar,
  },
  {
    round: 9,
    primaryMission: "Terraform",
    missionRule: "Stalwarts",
    deployment: sweepingEngagement,
  },
];

const warmasterMissions = [
  {
    round: 1,
    primaryMission: "The Ritual",
    missionRule: "Swift Action",
    deployment: "Crucible of Battle",
  },
  {
    round: 2,
    primaryMission: "Linchpin",
    missionRule: "Fog of War",
    deployment: "Tipping Point",
  },
  {
    round: 3,
    primaryMission: "Supply Drop",
    missionRule: "Smoke and Mirrors",
    deployment: "Hammer & Anvil",
  },
  {
    round: 4,
    primaryMission: "Take and Hold",
    missionRule: "Hidden Supplies",
    deployment: "Search & Destroy",
  },
  {
    round: 5,
    primaryMission: "Purge the Foe",
    missionRule: "Smoke and Mirrors",
    deployment: "Tipping Point",
  },
  {
    round: 6,
    primaryMission: "Scorched Earth",
    missionRule: "Inspired Leadership",
    deployment: "Crucible of Battle",
  },
  {
    round: 7,
    primaryMission: "Terraform",
    missionRule: "Swift Action",
    deployment: "Sweeping Engagement",
  },
  {
    round: 8,
    primaryMission: "Burden of Trust",
    missionRule: "Hidden Supplies",
    deployment: "Hammer & Anvil",
  },
  {
    round: 9,
    primaryMission: "Take and Hold",
    missionRule: "Raise Banners",
    deployment: "Tipping Point",
  },
]

const campingNautaMissions = [
  {
    round: 8,
    primaryMission: "Burden of Trust",
    missionRule: "Hidden Supplies",
    deployment: "Hammer & Anvil",
  },
  {
    round: 6,
    primaryMission: "Scorched Earth",
    missionRule: "Inspired Leadership",
    deployment: "Crucible of Battle",
  },
  {
    round: 4,
    primaryMission: "Take and Hold",
    missionRule: "Hidden Supplies",
    deployment: "Search & Destroy",
  },
  {
    round: 5,
    primaryMission: "Purge the Foe",
    missionRule: "Smoke and Mirrors",
    deployment: "Tipping Point",
  },
  {
    round: 9,
    primaryMission: "Take and Hold",
    missionRule: "Raise Banners",
    deployment: "Tipping Point",
  },
]