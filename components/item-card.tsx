import React from "react"

import { Vehicle } from "../interfaces"

type Props = {
  item: Vehicle
}

const ItemCard = ({ item }: Props) => {
  return (
    <div className="bg-white rounded-3xl w-96 m-4 text-center">
      <img src={item.photo} className="max-w-sm h-56 rounded-3xl mx-auto" />
      <p className="text-lg font-bold">{ item.make + " " + item.model  }</p>
      <p>Range: { item.range.distance + " " + item.range.unit }</p>
      <p>Price: { item.price }</p>
    </div>
  )
}

export default ItemCard
