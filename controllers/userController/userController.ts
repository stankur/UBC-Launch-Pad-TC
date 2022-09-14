import { RequestHandler } from "express";

const getOrders: RequestHandler = (req, res, next) => {
	if (req.query.start_date && req.query.end_date) {
		// filters orders only for delected date frames and returns
	}

	// gets all orders
};

const addOrder: RequestHandler = (req, res, next) => {
	// add order to user
};

export { getOrders, addOrder };
