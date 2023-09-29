
import { useSearchQuery } from "../api-endpoints/searchEndpoint";
function useSearchMovieHook (query){

    const {data, isLoading, error}  = useSearchQuery(query);
    
    return { data, isLoading, error}  

}
export default useSearchMovieHook