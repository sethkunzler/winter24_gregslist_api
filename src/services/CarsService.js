import { dbContext } from "../db/DbContext.js"

class CarsService {
  async getCars() {
    // NOTE dbContext allows us to communicate with our database. Cars is the collection in our database we are accessing. find is the mongoose method to query and retrieve data from our collection. If you don't pass an argument to find, it returns all "documents" from the database. find also returns an array
    const cars = await dbContext.Cars.find()
    return cars
  }
  async createCar(carData) {
    // NOTE create will add a document to our database using a javascript object. in this case, we pass through the request body and mongoose uses our schema for validation. create returns the newly created piece of data with additional properties (_id, createdAt, __v, etc)
    const car = await dbContext.Cars.create(carData)
    return car
  }
}

export const carsService = new CarsService()