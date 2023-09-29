import { movieState } from "../features/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { setId } from "../features/movieInfoSlice";
import {useNavigate} from "react-router-dom"

const MovieResult = () => {
    const movieList = useSelector(movieState)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleInfo = (id) =>{
        dispatch(setId(id))
        navigate(`/movie/${id}`)
    }
    return (
        <> 
        <h2>Movie Search Results</h2>
            <div className="movies-card-wrapper">            
                {movieList.length !== 0 ? movieList.map((movie) =>{
                return <div key={movie.id} className="moviesCard">
                    <img src = {`https://image.tmdb.org/t/p/original/${movie.poster_path}`}     alt="" />
                    <p className="title">{movie.title}</p>
                    <p className="releaseDate">{movie.release_date} </p>
                    <button className="viewMore btn" onClick={ () => handleInfo(movie.id)}>More Info</button>
                </div>
            }) : 
                <p>No movies Found</p>
            }            
            </div> 

        </>
  )
}

export default MovieResult