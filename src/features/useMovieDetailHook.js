
import { useMovieDetailQuery } from "../api-endpoints/movieDetailEndPoints";
function useMovieDetailHook(movieId){

    const {data, isLoading, error}  = useMovieDetailQuery(movieId);
    
    return { data, isLoading, error}  

}
export default useMovieDetailHook