import React from 'react';
import Like from "../components/common/like";

const MoviesTable = (props) => {


     const { movies, onDelete, onLike, onSort} = props;
    return ( 
    <div>
    
      <table className="table clickable">
        <thead>
          <tr>
            <th  onClick={() => onSort('title')} scope="col"> <i className="fa fa-sort" aria-hidden="true"></i> {' '}Title</th>
            <th onClick={()=>{ onSort('genre.name')}} scope="col"><i className="fa fa-sort" aria-hidden="true"></i>{' '}Genre</th>
            <th onClick={()=>{ onSort('numberInStock')}} scope="col"> <i className="fa fa-sort" aria-hidden="true"></i>{' '}Stock</th>
            <th onClick={()=>{ onSort('dailyRentalRate')}} scope="col"><i className="fa fa-sort" aria-hidden="true"></i>{' '}Rate</th>
         
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
                  onClick={() => onLike(movie)}
                />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
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
      
      </div>);
}
 
export default MoviesTable;