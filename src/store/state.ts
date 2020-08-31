export interface ProductItem {
  id: string,
  name: string,
  subtitle: string,
  price: number,
  thumbnail: string,
  quantity: number,
  added: boolean,
}

const InitialState: ProductItem[] = [
  {
    id: '1',
    name: "AWESOME Shows",
    subtitle: "New Collecton 2020",
    price: 31.00,
    thumbnail: "img/product/banner01.jpg",
    quantity: 0,
    added: false
  },
  {
    id: '2',
    name: "AWESOME BAG",
    subtitle: "New Collecton 2020",
    price: 23.00,
    thumbnail: "img/product/banner02.jpg",
    quantity: 0,
    added: false
  },
  {
    id: '3',
    name: "FINE WATCH",
    subtitle: "New Collecton 2020",
    price: 44.00,
    thumbnail: "img/product/banner03.jpg",
    quantity: 0,
    added: false
  },
  {
    id: '4',
    name: "SUNGLASS",
    subtitle: "New Collecton 2020",
    price: 33.00,
    thumbnail: "img/product/banner04.jpg",
    quantity: 0,
    added: false
  },
  {
    id: '5',
    name: "NICE BELT ",
    subtitle: "New Collecton 2020",
    price: 130.00,
    thumbnail: "img/product/banner05.jpg",
    quantity: 0,
    added: false
  },
  {
    id: '6',
    name: "AWESOME BAG",
    subtitle: "New Collecton 2020",
    price: 12.00,
    thumbnail: "img/product/banner02.jpg",
    quantity: 0,
    added: false
  },
  {
    id: '7',
    name: "AWESOME Shows",
    subtitle: "New Collecton 2020",
    price: 130.00,
    thumbnail: "img/product/banner01.jpg",
    quantity: 0,
    added: false
  },
  {
    id: '8',
    name: "AWESOME BAG",
    subtitle: "New Collecton 2020",
    price: 130.00,
    thumbnail: "img/product/banner02.jpg",
    quantity: 0,
    added: false
  },
  {
    id: '9',
    name: "FINE WATCH",
    subtitle: "New Collecton 2020",
    price: 130.00,
    thumbnail: "img/product/banner03.jpg",
    quantity: 0,
    added: false
  },
  {
    id: '10',
    name: "SUNGLASS",
    subtitle: "New Collecton 2020",
    price: 130.00,
    thumbnail: "img/product/banner04.jpg",
    quantity: 0,
    added: false
  },
  {
    id: '11',
    name: "NICE BELT ",
    subtitle: "New Collecton 2020",
    price: 130.00,
    thumbnail: "img/product/banner05.jpg",
    quantity: 0,
    added: false
  },
  {
    id: '12',
    name: "NICE BELT ",
    subtitle: "New Collecton 2020",
    price: 122.00,
    thumbnail: "img/product/banner05.jpg",
    quantity: 0,
    added: false
  },
  {
    id: '13',
    name: "NICE BELT ",
    subtitle: "New Collecton 2020",
    price: 12.00,
    thumbnail: "img/product/banner05.jpg",
    quantity: 0,
    added: false
  },
  {
    id: '14',
    name: "NICE BELT ",
    subtitle: "New Collecton 2020",
    price: 33.00,
    thumbnail: "img/product/banner05.jpg",
    quantity: 0,
    added: false
  },
  {
    id: '15',
    name: "NICE BELT ",
    subtitle: "New Collecton 2020",
    price: 22.00,
    thumbnail: "img/product/banner05.jpg",
    quantity: 0,
    added: false
  },
]
export { InitialState }