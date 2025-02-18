import {teamsTournament, warmasterTournament, campingNautaTournament, alpineCupTournament } from "../constants/constants";

export const tournamentTypes = [teamsTournament, warmasterTournament, campingNautaTournament, alpineCupTournament]


export const isSinglesTournament = (tournamentType) => tournamentType.singles;