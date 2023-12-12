import React from 'react'
import FetchProvider from './FetchContext'
import BaskeProvider from './BasketContext'

function MainProvider({children}) {
  return (
    <FetchProvider>
      <BaskeProvider>
        {children}
      </BaskeProvider>
    </FetchProvider>
  )
}

export default MainProvider