import React, { createContext, useState } from 'react'

export const FetchContext = createContext();

function FetchProvider({children}) {
    const [apiData, setApiData] = useState([])
     
    async function getData() {
        const res = await fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products")
        const data = await res.json()
        setApiData(data)
    }
    
    const data ={
        apiData,getData
    }

  return (
    <FetchContext.Provider value={data}>
        {children}
    </FetchContext.Provider>
  )
}

export default FetchProvider