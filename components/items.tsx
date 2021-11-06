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
      doSort(result, "Range")
      setItems(result)
      //console.log(result)
    })
    return () => { cleanup = true }
  }, [])

  function changeSort(event) {
    const sortMethod = event.target.value
    console.log(sortMethod)
    doSort(items, sortMethod)
    setItems([...items])
  }

  function doSort(list, method = "") {
    // sort on price
    list.sort((x, y) => {
      const a = Number(x.price.split(" ")[0])
      const b = Number(y.price.split(" ")[0])
      return a - b
    })
    if (method === "Range") {
      list.sort((x, y) => {
        return y.range.distance - x.range.distance
      })
    }
  }

  return (
    <>
    <p className="text-center">Sort by:
    <select onChange={changeSort} defaultValue="Range">
    <option value="Range">Best Range</option>
    <option value="Price">Lowest Price</option>
    </select>
    </p>
    <div>
    <ul className="text-center">
      {
        items.map((item, index) => (
          <li key={item.id} className="inline-block">
            <ItemCard item={item} />
          </li>
        ))
      }
    </ul>
    </div>
    </>
  )
}

export default Items
