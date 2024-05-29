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
    primaryMission: "Supply drop",
    missionRule: "Chilling Rain",
    deployment: "Hammer & Anvil",
  }
]