const BASE_URL = 'https://glickorankingapplication.onrender.com/api/public/players';


  
  export const fetchPlayers = async () => {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error('Error fetching players');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };