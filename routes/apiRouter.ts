import { Router } from "express";
import {
	getAllMenuItems,
	getSingleMenuItem,
} from "../controllers/menuItemsController";

const router: Router = Router();

router.get("/menu-items", getAllMenuItems);
router.get("/menu-items/:id", getSingleMenuItem);

router.get("/users/:id/orders");
router.post("users/:id/orders")

export default router;
