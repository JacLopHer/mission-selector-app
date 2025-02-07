import {teamsTournament, warmasterTournament, campingNautaTournament } from "../constants/constants";

export const tournamentTypes = [teamsTournament, warmasterTournament, campingNautaTournament]


export const isSinglesTournament = (tournamentType) => tournamentType.singles;