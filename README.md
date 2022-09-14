This is the technical challenge of UBC Launch Pad interview. 

> You are a business owner at Launch-Pizza. One day you decide to open your store to online purchases. The basic functionality must allow any customer to order a pizza from a set menu, track the order status of the pizza, and be able to see a receipt for their order for up to one year. Describe and give examples of a basic API and its endpoints that will accomplish this task. You do not need to extensively document this API.

This is a boilerplate for a back-end which could handle this API.

Since the API is an interface to the back-end, I believe it must be simple, consistent, and easily understood. 

I think the URI should have proper naming conventions and not be very long (at most 3 levels) to serve this purpose.

| URI | Verb | Description |  query parameters
|     :----:    |     :----:    |     :----:    |  :----:    | 
| /api/menu-items | GET | gets all menu items | -  | 
| /api/menu-items/:id | GET | gets details about a particular menu item | -  | 
|/api/users/:id/orders | GET | gets the orders of the specified user  |start_date?, end_date?   | 
| /api/users/:id/orders | POST | adds a new order to the specified user | - |
| /api/orders/:id | GET | gets details of the apecified order | - |

The front-end could display the menu by data given by GET /api/menu-items and GET /api/menu-items/:id for a specific menu item. Ordering would be trough POST /api/users/:id/orders. order status and the receipt details could be obtained from GET /api/orders/:id. The part where users coud choose to see receipt up to 1 year will be achieved through passing query params start_date and end_date to GET /api/users/:id/orders.

Notes:

I used menu-items since it would be easier to extend if Launch-Pizza decides to sell other menu than pizzas. 


