import { dbContext } from "../db/DbContext.js"

class HousesService {
  async getHouses() {
    const houses = await dbContext.Houses.find()
    return houses
  }
}

export const housesService = new HousesService()