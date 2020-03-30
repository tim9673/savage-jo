import React from 'react'
import { Trailers } from './resources/trailer/Trailers'
import { Provider } from 'react-redux'
import { store } from './resources/store'

export const App: React.FC = () => (
  <Provider store={store}>
    <Trailers />
  </Provider>
)
