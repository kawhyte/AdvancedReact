import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

import Pagination from "../components/common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "../components/common/listGroup";
import MoviesTable from "../components/moviesTable";

class Movies extends Component {
  state = { movies: [], genres: [], currentPage: 1, pageSize: 3 };

  componentDidMount() {
    const updatedGenres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: updatedGenres });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    console.log(movie);
    this.setState({ movies: movies });
    console.log(movies);
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
    console.log("clicked", movies);
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
    console.log(page);
  };

  hanleGenereSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
    console.log(genre);
  };

  render() {
    if (this.state.movies.length === 0) {
      return <p className="badge badge-info"> No movies found </p>;
    }

    // const selectedGenre = this.state.selectedGenre;
    // Filter
    const filtered =
      this.state.selectedGenre && this.state.selectedGenre._id
        ? this.state.movies.filter(
            m => m.genre._id === this.state.selectedGenre._id
          )
        : this.state.movies;

    const movies = paginate(
      filtered,
      this.state.currentPage,
      // this.state.selectedGenre,
      this.state.pageSize
    );

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.hanleGenereSelect}
          />
        </div>

        <div className="col-2">
          <h4>
            {/* <p> {this.state.movies.length} movies in the database</p> */}
            <p> {filtered.length} movies in the database</p>
          </h4>

          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />

          <Pagination
            // itemsCount={this.state.movies.length}
            itemsCount={filtered.length}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
