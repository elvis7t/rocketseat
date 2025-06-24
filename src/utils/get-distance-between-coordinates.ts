export interface Coordinates {
  latitude: number
  longitude: number
}

export function getDistanceBetweenCoordinates(
  from: Coordinates,
  to: Coordinates,
): number {
  if (from.latitude === to.latitude && from.longitude === to.longitude) {
    return 0
  }

  const R = 6371e3 // metres
  const φ1 = (from.latitude * Math.PI) / 180 // φ, λ in radians
  const φ2 = (to.latitude * Math.PI) / 180
  const Δφ = ((to.latitude - from.latitude) * Math.PI) / 180
  const Δλ = ((to.longitude - from.longitude) * Math.PI) / 180

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c // in metres
}

// export interface Coordinate {
//   latitude: number
//   longitude: number
// }

// export function getDistanceBetweenCoordinates(
//   from: Coordinate,
//   to: Coordinate,
// ) {
//   if (from.latitude === to.latitude && from.longitude === to.longitude) {
//     return 0
//   }

//   const fromRadian = (Math.PI * from.latitude) / 180
//   const toRadian = (Math.PI * to.latitude) / 180

//   const theta = from.longitude - to.longitude
//   const radTheta = (Math.PI * theta) / 180

//   let dist =
//     Math.sin(fromRadian) * Math.sin(toRadian) +
//     Math.cos(fromRadian) * Math.cos(toRadian) * Math.cos(radTheta)

//   if (dist > 1) {
//     dist = 1
//   }

//   dist = Math.acos(dist)
//   dist = (dist * 180) / Math.PI
//   dist = dist * 60 * 1.1515
//   dist = dist * 1.609344

//   return dist
// }
