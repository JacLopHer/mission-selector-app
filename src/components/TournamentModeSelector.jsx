import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { tournamentTypes } from '../utils/tournamentTypes';
import MissionContext from '../MissionContext';


const TournamentModeSelector = () => {
    const {setSelectedTournamentType} = useContext(MissionContext);
    const navigate = useNavigate();
    
    const handleSelectTournamentType = (tournamentType) => {
        setSelectedTournamentType(tournamentType);
        navigate('/select-mission');
  };
  return (
    <div>
      <h2>Select Tournament type</h2>
      <ul>
        {tournamentTypes.map((type, index) => (
          <li key={index} onClick={() => handleSelectTournamentType(type)}>
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TournamentModeSelector