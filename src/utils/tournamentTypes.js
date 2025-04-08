import {teamsTournament, teamsAllDeploymentsTournament, mollerussaTournament} from "../constants/constants";

export const tournamentTypes = [teamsTournament, teamsAllDeploymentsTournament, mollerussaTournament]


export const isSinglesTournament = (tournamentType) => tournamentType.singles;