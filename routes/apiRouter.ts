import { Router } from "express";

import {
	getAllMenuItems,
	getSingleMenuItem,
} from "../controllers/menuItemController/menuItemController";
import { getOrders, addOrder } from "../controllers/userController/userController";
import { getOrder } from "../controllers/orderController/orderController";

const router: Router = Router();

router.get("/menu-items", getAllMenuItems);
router.get("/menu-items/:id", getSingleMenuItem);

router.get("/users/:id/orders", getOrders);
router.post("users/:id/orders", addOrder);

router.get("/orders/:id", getOrder);

export default router;
