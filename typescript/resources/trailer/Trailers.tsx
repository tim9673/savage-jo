import React, { useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllTrailers } from './trailerReducer'
import { Trailer } from './Trailer'
import { Film } from '../film/film'
import { displayTrailer, receivedTrailers } from './trailerAction'

export const Trailers: React.FC = () => {
  const films: Film[] = []
  const dispatch = useDispatch()
  const trailers = useSelector(getAllTrailers)

  useLayoutEffect(() => {
    const filmElements = document.querySelectorAll('[data-film]')
    filmElements.forEach((filmElement: any) => {
      const film = JSON.parse(filmElement.dataset.film)
      const handleFilmClick = () => dispatch(displayTrailer(film.id))
      films.push(film)
      filmElement.addEventListener('click', handleFilmClick)
    })

    dispatch(receivedTrailers(films.map(({ id, trailer }) => ({ id, url: trailer }))))

    return () => {
      filmElements.forEach((filmElement: any) => {
        filmElement.removeEventListener('click')
      })
    }
  }, [])

  return (
    <>
      {trailers?.map((trailer) => (
        <Trailer key={trailer.id} {...trailer} />
      ))}
    </>
  )
}
