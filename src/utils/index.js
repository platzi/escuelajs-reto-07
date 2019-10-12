export const getRandomString = () => {
  return Math.random().toString(36).substring(3)
};

export const getSumItemsOfCart = (items) => {
  const totalSum = items.reduce((acc, curr) => {
    const sum = acc + curr.price
    return sum
  }, 0)
  return totalSum
};

export default { getRandomString, getSumItemsOfCart }