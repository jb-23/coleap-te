import React from "react"

import { Vehicle } from "../interfaces"

type Props = {
  item: Vehicle
}

const ItemCard = ({ item }: Props) => {
  return (
    <div>
      <img src={item.photo} />
      <p>{ item.make + " " + item.model  }</p>
      <p>Price: { item.price }</p>
    </div>
  )
}

export default ItemCard
