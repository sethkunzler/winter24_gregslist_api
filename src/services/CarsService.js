import { dbContext } from "../db/DbContext.js"

class CarsService {
  async getCars() {
    const cars = await dbContext.Cars.find()
    return cars
  }
  async createCar(carData) {
    const car = await dbContext.Cars.create(carData)
    return car
  }
}

export const carsService = new CarsService()