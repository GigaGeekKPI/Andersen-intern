function flyBy(lamps, drone) {
    let path = drone.length > lamps.length ? 'o'.repeat(lamps.length) : 'o'.repeat(drone.length);
    return path + lamps.slice(drone.length);
}