import {teamsTournament, warmasterTournament} from "../constants/constants";

export const tournamentTypes = [teamsTournament, warmasterTournament]


export const isSinglesTournament = (tournamentType) => tournamentType.singles;