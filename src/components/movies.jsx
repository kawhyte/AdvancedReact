import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "../components/common/like";
import Pagination from "../components/common/pagination";
import {paginate} from "../utils/paginate";

class Movies extends Component {
  state = { movies: getMovies(), currentPage: 1, pageSize: 3 };

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

  render() {
    if (this.state.movies.length === 0) {
      return (
        <h1>
          {" "}
          <p className="badge badge-info"> No movies found </p>
        </h1>
      );
    }

    const movies = paginate(this.state.movies, this.state.currentPage,this.state.pageSize)
    
    return (
      <div>
        <h4>
          {" "}
          <p> {this.state.movies.length} movies in the database</p>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-small"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={"this.state.movies.length"}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
          currentPage={this.state.currentPage}
        />
      </div>
    );
  }
}

export default Movies;
