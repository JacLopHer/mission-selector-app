
import { teams, freakWars, assemble2025, hammerAndAnvil, searchAndDestroy, crucibleOfBatle, vitoria, talavera2024, campingNauta, tippingPoint, sweepingEngagement, alpineCup, teamsAllDeployments, dawnOfWar, supplyDrop, smokeAndMirrors, ritual, stalwarts, terraform, swiftAction, scorchedEarth, inspiredLeadership, takeAndHold, raiseBanners, linchpin, fogOfWar, hiddenSupplies, purgeTheFoe, rapidEscalation, preparedPositions, mollerussa, mollerussaSingles } from './../constants/constants';

export const missions = (tournamentType) => {
  switch(tournamentType.name){
    case teamsAllDeployments:
      return teamAllMissions;
    case teams:
      return wtc2025;
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
    case mollerussa:
      return mollerussaMissions
    case mollerussaSingles:
      return mollerussaSinglesMissions;
    default:
      return warmasterMissions;
  }  
} 


const wtc2025 = [
  {
    round: 1,
    primaryMission: supplyDrop,
    missionRule: smokeAndMirrors,
    deployment: hammerAndAnvil,
  },
  {
    round: 2,
    primaryMission: ritual,
    missionRule: stalwarts,
    deployment: hammerAndAnvil,
  },
  {
    round: 3,
    primaryMission: terraform,
    missionRule: swiftAction,
    deployment: crucibleOfBatle,
  },
  {
    round: 4,
    primaryMission: scorchedEarth,
    missionRule: inspiredLeadership,
    deployment: crucibleOfBatle,
  },
  {
    round: 5,
    primaryMission: takeAndHold,
    missionRule: raiseBanners,
    deployment: tippingPoint,
  },
  {
    round: 6,
    primaryMission: linchpin,
    missionRule: fogOfWar,
    deployment: tippingPoint,
  },
  {
    round: 7,
    primaryMission: takeAndHold,
    missionRule: hiddenSupplies,
    deployment: searchAndDestroy,
  },
]

const mollerussaMissions = [
  {
    round: 1,
    primaryMission: terraform,
    missionRule: swiftAction,
    deployment: crucibleOfBatle,
  },
  {
    round: 2,
    primaryMission: purgeTheFoe,
    missionRule: rapidEscalation,
    deployment: crucibleOfBatle,
  },
  {
    round: 3,
    primaryMission: takeAndHold,
    missionRule: preparedPositions,
    deployment: hammerAndAnvil,
  },
  {
    round: 4,
    primaryMission: linchpin,
    missionRule: raiseBanners,
    deployment: searchAndDestroy,
  },
  {
    round: 5,
    primaryMission: scorchedEarth,
    missionRule: stalwarts,
    deployment: searchAndDestroy,
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

const mollerussaSinglesMissions = [
  {
    round: 1,
    primaryMission: terraform,
    missionRule: swiftAction,
    deployment: crucibleOfBatle,
  },
  {
    round: 2,
    primaryMission: purgeTheFoe,
    missionRule: rapidEscalation,
    deployment: crucibleOfBatle,
  },
  {
    round: 3,
    primaryMission: takeAndHold,
    missionRule: preparedPositions,
    deployment: hammerAndAnvil,
  },
  {
    round: 4,
    primaryMission: linchpin,
    missionRule: raiseBanners,
    deployment: searchAndDestroy,
  },
  {
    round: 5,
    primaryMission: scorchedEarth,
    missionRule: stalwarts,
    deployment: searchAndDestroy,
  },
  
]