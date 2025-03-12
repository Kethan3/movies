interface Movie {
    id: string;
    title: string;
    director: string;
    releaseYear: number;
    genre: string;
    ratings: number[];
  }
  
  const movies: Movie[] = [];
  

  function addMovie(id: string, title: string, director: string, releaseYear: number, genre: string): void {
    if (movies.find(movie => movie.id === id)) {
      console.log(`Movie with ID ${id} already exists.`);
      return;
    }
    movies.push({ id, title, director, releaseYear, genre, ratings: [] });
    console.log(`Movie '${title}' added successfully.`);
  }
  

  function rateMovie(id: string, rating: number): void {
    const movie = movies.find(m => m.id === id);
    if (!movie) {
      console.log("Movie not found.");
      return;
    }
    if (rating < 1 || rating > 5) {
      console.log("Rating must be between 1 and 5.");
      return;
    }
    movie.ratings.push(rating);
    console.log(`Movie '${movie.title}' rated ${rating} stars.`);
  }
  

  function getAverageRating(id: string): number | undefined {
    const movie = movies.find(m => m.id === id);
    if (!movie || movie.ratings.length === 0) return undefined;
    return movie.ratings.reduce((sum, r) => sum + r, 0) / movie.ratings.length;
  }
  

  function getTopRatedMovies(): Movie[] {
    return movies
      .filter(m => m.ratings.length > 0)
      .sort((a, b) => (getAverageRating(b.id) || 0) - (getAverageRating(a.id) || 0));
  }
  

  function getMoviesByGenre(genre: string): Movie[] {
    return movies.filter(m => m.genre.toLowerCase() === genre.toLowerCase());
  }
  
  
  function getMoviesByDirector(director: string): Movie[] {
    return movies.filter(m => m.director.toLowerCase() === director.toLowerCase());
  }
 
  function searchMoviesBasedOnKeyword(keyword: string): Movie[] {
    return movies.filter(m => m.title.toLowerCase().includes(keyword.toLowerCase()));
  }
  

  function getMovie(id: string): Movie | undefined {
    return movies.find(m => m.id === id);
  }
  

  function removeMovie(id: string): void {
    const index = movies.findIndex(m => m.id === id);
    if (index !== -1) {
      console.log(`Movie '${movies[index].title}' removed.`);
      movies.splice(index, 1);
    } else {
      console.log("Movie not found.");
    }
  }
  

  module.exports = {
    addMovie,
    rateMovie,
    getAverageRating,
    getTopRatedMovies,
    getMoviesByGenre,
    getMoviesByDirector,
    searchMoviesBasedOnKeyword,
    getMovie,
    removeMovie,
  };
  