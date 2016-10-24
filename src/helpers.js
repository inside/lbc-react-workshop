const formatPrice = price => {
  return `${price} €`
}

const sortAsc = ({price: priceA}, {price: priceB}) => {
  if (priceA > priceB) {
    return 1
  }
  if (priceA < priceB) {
    return -1
  }

  return 0
}

const sortDesc = ({price: priceA}, {price: priceB}) => {
  if (priceA < priceB) {
    return 1
  }
  if (priceA > priceB) {
    return -1
  }

  return 0
}

export {
  formatPrice,
  sortAsc,
  sortDesc
}
