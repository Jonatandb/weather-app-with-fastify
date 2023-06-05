const citiesOfTheWorld = [
  'Barcelona',
  'Quito',
  'San Pablo',
  'Reykjavik',
  'Qatar',
  'Tokyo',
  'Beijing',
  'Cairo',
  'Mumbai',
  'Mexico City',
  'Delhi',
  'Shanghai',
  'Jakarta',
]

export const getRandomCitiesList = (quantity = 1) => {
  const fivecities = []
  for (let i = 0; i < quantity; i++) {
    const randomCity = citiesOfTheWorld[Math.floor(Math.random() * citiesOfTheWorld.length)]
    if (!fivecities.includes(randomCity)) {
      fivecities.push(randomCity)
    } else {
      i--
    }
  }
  return fivecities
}
