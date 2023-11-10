// Function to fetch movie details
export const fetchMovieDetails = async (movieTitle) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=b32be2df&t=${movieTitle}`);
      const data = await response.json();
      return data.Response === 'True' ? data : null;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      return null;
    }
  };

export const fetchMoviesByTitle = async (title) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=b32be2df&s=${title}`);
      const result = await response.json();
      return result.Response === 'True' ? result.Search : [];
    } catch (error) {
      console.error('Error fetching movies:', error);
      return [];
    }
  };