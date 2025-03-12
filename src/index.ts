const readline = require("readline-sync");
const {
  addMovie,
  rateMovie,
  getMoviesByGenre,
  getMoviesByDirector,
  searchMoviesBasedOnKeyword,
  getTopRatedMovies,
  getMovie,
  removeMovie,
} = require("./movies");

while (true) {
  console.log("\nMovies Management System");
  console.log("1. Add Movie");
  console.log("2. Rate Movie");
  console.log("3. Get Movies by Genre");
  console.log("4. Get Movies by Director");
  console.log("5. Search Movies by Keyword");
  console.log("6. Get Top Rated Movies");
  console.log("7. Get Movie Details");
  console.log("8. Remove Movie");
  console.log("9. Exit");

  const choice = readline.question("Enter your choice: ");

  switch (choice) {
    case "1":
      const id = readline.question("Enter movie ID: ");
      const title = readline.question("Enter title: ");
      const director = readline.question("Enter director: ");
      const releaseYear = parseInt(readline.question("Enter release year: "));
      const genre = readline.question("Enter genre: ");
      addMovie(id, title, director, releaseYear, genre);
      break;

    case "2":
      const movieId = readline.question("Enter movie ID to rate: ");
      const rating = parseInt(readline.question("Enter rating (1-5): "));
      rateMovie(movieId, rating);
      break;

    case "3":
      const genreSearch = readline.question("Enter genre: ");
      console.log(getMoviesByGenre(genreSearch));
      break;

    case "4":
      const directorSearch = readline.question("Enter director: ");
      console.log(getMoviesByDirector(directorSearch));
      break;

    case "5":
      const keyword = readline.question("Enter keyword: ");
      console.log(searchMoviesBasedOnKeyword(keyword));
      break;

    case "6":
      console.log(getTopRatedMovies());
      break;

    case "7":
      const movieDetailsId = readline.question("Enter movie ID: ");
      console.log(getMovie(movieDetailsId));
      break;

    case "8":
      const removeId = readline.question("Enter movie ID to remove: ");
      removeMovie(removeId);
      break;

    case "9":
      console.log("Exiting...");
      process.exit();

    default:
      console.log("Invalid choice. Please try again.");
  }
}
