import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Category } from "../entity/Category";

export class CategoryController {

    private categoryRepository = getRepository(Category);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.categoryRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.categoryRepository.findOneById(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.categoryRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        await this.categoryRepository.removeById(request.params.id);
    }

}