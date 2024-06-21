export const missions = (tournamentType) => tournamentType === "Teams" ? teamMissions : warmasterMissions;

const teamMissions = [
    {
      round: 1,
      primaryMission: "Supply drop",
      missionRule: "Chilling Rain",
      deployment: "Hammer & Anvil",
    },
    {
      round: 2,
      primaryMission: "The Ritual",
      missionRule: "Chilling Rain",
      deployment: "Crucible of Battle",
    },
    {
      round: 3,
      primaryMission: "Purge the foe",
      missionRule: "Hidden Supplies",
      deployment: "Sweeping Engagement",
    },
    {
      round: 4,
      primaryMission: "Scorched Earth",
      missionRule: "Chilling Rain",
      deployment: "Search & Destroy",
    },
    {
      round: 5,
      primaryMission: "Vital Ground",
      missionRule: "Chilling Rain",
      deployment: "Crucible of Battle",
    },
    {
      round: 6,
      primaryMission: "Priority Targets",
      missionRule: "Chilling Rain",
      deployment: "Sweeping Engagement",
    },
    {
      round: 7,
      primaryMission: "Take & Hold",
      missionRule: "Chilling Rain",
      deployment: "Search & Destroy",
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