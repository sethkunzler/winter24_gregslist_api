import { housesService } from "../services/HousesService.js"
import BaseController from "../utils/BaseController.js"

export class HousesController extends BaseController {
  constructor() {
    super('api/houses')
    this.router
      .get('', this.getHouses)
      .post('', this.createHouse)
      // .get('/:carId', this.getCarById)
      // .put('/:carId', this.updateCar)
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
      
    } catch (error) {
      next(error)
    }
  }
}