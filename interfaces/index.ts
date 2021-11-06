// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type Vehicle = {
  id: string
  make: string
  model: string
  range: { unit: string; distance: number }
  colors: [ string ]
  price: string
  photo: string
}
