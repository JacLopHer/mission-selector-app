import {teamsTournament, teamsAllDeploymentsTournament,  warmasterTournament} from "../constants/constants";

export const tournamentTypes = [teamsTournament, teamsAllDeploymentsTournament, warmasterTournament]


export const isSinglesTournament = (tournamentType) => tournamentType.singles;