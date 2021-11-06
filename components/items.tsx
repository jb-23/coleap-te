import * as React from "react"
import { useEffect, useState } from "react"

import ItemCard from "./item-card"

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
    <ul>
      {
        items.map((item, index) => (
          <li key={index} className="inline-block">
            <ItemCard item={item} />
          </li>
        ))
      }
    </ul>
  )
}

export default Items
