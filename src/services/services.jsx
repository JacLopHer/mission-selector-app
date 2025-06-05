export const fetchPlayers = async () => {
  try {
    const response = await fetch('/api/public/players'); 
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