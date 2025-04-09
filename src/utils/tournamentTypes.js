import {teamsTournament, teamsAllDeploymentsTournament, mollerussaTournament, mollerussaSinglesTournament} from "../constants/constants";

export const tournamentTypes = [teamsTournament, teamsAllDeploymentsTournament, mollerussaTournament, mollerussaSinglesTournament]


export const isSinglesTournament = (tournamentType) => tournamentType.singles;