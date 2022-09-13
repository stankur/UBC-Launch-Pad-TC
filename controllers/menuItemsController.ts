import {RequestHandler} from "express"

const getAllMenuItems: RequestHandler = (req, res, next) => {
    //return all menu items
};

const getSingleMenuItem: RequestHandler = (req, res, next) => {
    // return single menu item
}

export { getAllMenuItems, getSingleMenuItem };