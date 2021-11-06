import React from "react"

import { Vehicle } from "../interfaces"

type Props = {
  item: Vehicle
}

const ItemCard = ({ item }: Props) => {
  return (
    <div className="bg-white rounded-3xl max-w-md m-4">
      <img src={item.photo} className="max-w-sm max-h-56 rounded-3xl" />
      <p>{ item.make + " " + item.model  }</p>
      <p>{ item.range.distance }</p>
      <p>Price: { item.price }</p>
    </div>
  )
}

export default ItemCard
