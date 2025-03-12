import {teamsTournament, teamsAllDeploymentsTournament} from "../constants/constants";

export const tournamentTypes = [teamsTournament, teamsAllDeploymentsTournament]


export const isSinglesTournament = (tournamentType) => tournamentType.singles;