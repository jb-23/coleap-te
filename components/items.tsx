import * as React from "react"
import { useEffect, useState } from "react"

type Props = {
}

const Items = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    let cleanup = false
    fetch("https://6157228e8f7ea600179850e4.mockapi.io/api/vehicles",
      { method: "GET", headers: { }, }
    ).then(result => {
      return result.json()
    }).then(result => {
      setItems(result)
      //console.log(result)
    })
    return () => { cleanup = true }
  }, [])

  return (
    <p>
      {items.map(item => JSON.stringify(item)).join(" ")}
    </p>
  )
}

export default Items
