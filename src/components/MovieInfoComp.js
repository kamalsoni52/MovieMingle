import React from 'react'
import { useParams } from 'react-router-dom'
import useMovieDetailHook from '../features/useMovieDetailHook'
import LoadingComp from './LoadingComp'

function time_convert(num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return hours + "hr " + minutes + "min";
}

const MovieInfoComp = () => {
  const param = useParams()
  const { data, isLoading } = useMovieDetailHook(param.id)
  let result = (<><p>No Info</p></>)
  if (isLoading) {
    result = <LoadingComp />
  }
  else if (data) {
    console.log(data)
    result = (
      <>
        <div className='infoWrapper flex-center'>
          <div className='imgWrapper'>
            <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="" />
          </div>
          <div className='contentWrapper'>
            <h1>{data.title}</h1>
            <div className='extraDetail'>
              <div>
                {data.adult === false ? <span className="ageLimit" >UA</span> : <span className='ageLimit'>18+</span>}
              </div>
              <div>
                <ul className='genre'>
                  {data.genres.length !== 0 && data.genres.map((genre) => {
                    return <li>{genre.name}</li>
                  })}
                </ul>
              </div>
              <div>
                <span>{time_convert(data.runtime)}</span>
              </div>
            </div>

            <p className='tagline'>{data.tagline}</p>
            <h3>Overview</h3>
            <p className='overview'>{data.overview}</p>
            <h4>Production House's</h4>
            <ul className='productionHouse flex-center'>{data.production_companies.length !== 0 && data.production_companies.map((companies) => {
              return <li className='flex-center'>
                <img src={`https://image.tmdb.org/t/p/original/${companies.logo_path}`} alt="" />
                <span>{companies.name}</span>
              </li>
            })}
            </ul>
          </div>
        </div>
      </>
    )
  }
  else {
    result = (<><p>some new error</p></>)
  }

  return <div className='homeContainer flex-center'>{result}</div>
}

export default MovieInfoComp