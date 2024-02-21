import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class HousesService {
  async getHouses() {
    const houses = await dbContext.Houses.find()
    return houses
  }
  async createHouse(houseData) {
    const house = await dbContext.Houses.create(houseData)
    return house
  }
  async getHouseById(houseId) {
    const house = await dbContext.Houses.findById(houseId)
    if(!house) {
      throw new BadRequest(`no house found with id of ${houseId}`) 
    }
    return house
  }
  async updateHouse(houseId, houseData) {
    const houseToUpdate = await this.getHouseById(houseId)

    houseToUpdate.price = houseData.price == undefined ? houseToUpdate.price : houseData.price
    houseToUpdate.imgUrl = houseData.imgUrl == undefined ? houseToUpdate.imgUrl : houseData.imgUrl
    houseToUpdate.description = houseData.description == undefined ? houseToUpdate.description : houseData.description

    await houseToUpdate.save()
    
    return houseToUpdate
  }
}

export const housesService = new HousesService()