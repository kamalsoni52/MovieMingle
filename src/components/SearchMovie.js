import { useState, useEffect, useRef } from 'react';
import useSearchMovieHook from "../features/useSearchMovieHook";
import { useDispatch } from 'react-redux';
import { setMovies, reset } from '../features/movieSlice';
import LoadingComp from './LoadingComp';
import ErrorComp from './ErrorComp';
import MovieResult from './MovieResult';
const SearchMovie = () => {

    const dispatch = useDispatch();
    const searchInput = useRef();
    const [search, setSearch] = useState("")
    const { data, isLoading, error } = useSearchMovieHook(search)

    const [result, setResult] = useState((
        <>
            <div><p>Seacrch for movies</p></div>
        </>)
    )
    useEffect(() => {
        searchInput.current.focus()
    }, [])

    useEffect(() => {
        if (isLoading) {
            setResult(<LoadingComp />)
        }
        else if (data) {
            dispatch(setMovies(data.results.slice(10)));
            setResult(<MovieResult />)
        }
        else if (error) {
            setResult(<ErrorComp />)
            dispatch(reset())
        }
        else {
            dispatch(reset())
        }

    }, [data, isLoading, error, dispatch])

    function handleChange(e) {
        setSearch(e.target.value); // Update the search state when input changes 
    }

    return (
        <>
            <div className='homeContainer '>
                <div className='searchForm flex-center'>
                    <label htmlFor="search">Find Movies </label>
                    <input
                        type="text"
                        value={search}
                        onChange={handleChange}
                        ref={searchInput}
                        autoComplete='off'
                        required
                        placeholder='Type Movie Name'
                    />
                    {/* <button>Search</button> */}
                </div>
                <div className="searchResult flex-center" >
                    {result}
                </div>

            </div>

        </>
    )
}

export default SearchMovie