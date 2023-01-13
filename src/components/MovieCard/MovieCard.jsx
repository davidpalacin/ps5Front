import React from 'react'
import { enviroment } from '../../_enviroments/enviroment'
import './MovieCard.scss'

export default function MovieCard({movie}) {
  return (
    <div className='movieCard'>
      <div className="movieCardRating">{movie.vote_average}</div>
      <img src={`${enviroment.IMAGE_URL}${movie.poster_path}`} alt="poster path" />
      <p className='movieCardTitle'>{movie.title}</p>
    </div>
  )
}
