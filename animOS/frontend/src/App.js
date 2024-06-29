import React, { useEffect, useState } from 'react'

const App = () => {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      resonpse => resonpse.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof backendData.users === 'undefined') ? (
        <p>'Loading...'</p>
       ) : (
        backendData.users.map((users, i) => (
          <p key={i}>{users}</p>
        ))
      )}
    </div>
  )
}

export default App
