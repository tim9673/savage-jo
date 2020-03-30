import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './Trailer.scss'
import { useDispatch } from 'react-redux'
import { hideTrailer } from './trailerAction'
import { animated, useTransition } from 'react-spring'

export interface Props {
  id: number
  url: string
  visibility?: boolean
}

export const Trailer: React.FC<Props> = ({ id, url, visibility = false }) => {
  const dispatch = useDispatch()
  const transitions = useTransition(visibility, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  const portalBody = (
    <>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          {item && (
            <div
              className="trailer"
              onClick={() => {
                dispatch(hideTrailer(id))
              }}
            >
              <div className="trailer__width">
                <div className="trailer__container">
                  <iframe className="trailer__iframe" src={url} />
                </div>
              </div>
            </div>
          )}
        </animated.div>
      ))}
    </>
  )

  return ReactDOM.createPortal(portalBody, window.document.body)
}
