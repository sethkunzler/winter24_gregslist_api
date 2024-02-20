import { housesService } from "../services/HousesService.js"
import BaseController from "../utils/BaseController.js"

export class HousesController extends BaseController {
  constructor() {
    super('api/houses')
    this.router
      .get('', this.getHouses)
      .post('', this.createHouse)
      .get('/:houseId', this.getHouseById)
      .put('/:houseId', this.updateHouse)
      // .delete('/:carId', this.destroyCar)
  }

  /**
  * @param {import("express").Request} request
  * @param {import("express").Response} response
  * @param {import("express").NextFunction} next
  */
  async getHouses(request, response, next) {
    try {
      const houses = await housesService.getHouses()
      response.send(houses) 
    } catch (error) {
      next(error)
    }
  }
  
  /**
  * @param {import("express").Request} request
  * @param {import("express").Response} response
  * @param {import("express").NextFunction} next
  */
  async createHouse(request, response, next) {
    try {
      const houseData = request.body
      const house = await housesService.createHouse(houseData)
      response.send(house)
    } catch (error) {
      next(error)
    }
  }

  /**
  * @param {import("express").Request} request
  * @param {import("express").Response} response
  * @param {import("express").NextFunction} next
  */
  async getHouseById(request, response, next) {
    try {
      const houseId = request.params.houseId
      const house = await housesService.getHouseById(houseId)
      response.send(house)

    } catch (error) {
      next(error)
    }
  }

  /**
  * @param {import("express").Request} request
  * @param {import("express").Response} response
  * @param {import("express").NextFunction} next
  */
  async updateHouse(request, response, next) {
    try {
      const houseId = request.params.houseId
      const houseData = request.body
      const house = await housesService.updateHouse(houseId, houseData)
      response.send(house)
    } catch (error) {
      next(error)
    }
  } 
  
}