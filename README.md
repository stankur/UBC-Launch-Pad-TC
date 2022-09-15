This is the technical challenge of UBC Launch Pad interview.

> You are a business owner at Launch-Pizza. One day you decide to open your store to online purchases. The basic functionality must allow any customer to order a pizza from a set menu, track the order status of the pizza, and be able to see a receipt for their order for up to one year. Describe and give examples of a basic API and its endpoints that will accomplish this task. You do not need to extensively document this API.

This is a boilerplate for a back-end which could handle this API.

Since the API is an interface to the back-end, I believe it must be simple, consistent, and easily understood.

I think the URI should have proper naming conventions and not be very long (at most 3 levels) to serve this purpose.

|          URI (starts with /api)          | Verb |                Description                |    Query Parameters    |                                                                    Usage                                                                    |
| :-------------------: | :--: | :---------------------------------------: | :--------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
|    /menu-items    | GET  |            gets all menu items            |           -            |                            to get all available menu along with minimal details to be displayed in the front-end                            |
|  /menu-items/:id  | GET  | gets details about a particular menu item |           -            |                           to display more details for a specific menu item (maybe if user clicks on a menu item)                            |
| /users/:id/orders | GET  |   gets the orders of the specified user   | start_date?, end_date? | to get the specified user's orders and their status and receipt and handle the case when filter is applied to be displayed in the front-end |
| /users/:id/orders | POST |  adds a new order to the specified user   |           -            |                                                       to handle user making an order                                                        |
|    /orders/:id    | GET  |    gets details of the apecified order    |           -            |          to get information of order status, receipt, and other details for the specified order (maybe if user clicks on an order)          |

Notes:

I used menu-items since it would be easier to extend if Launch-Pizza decides to sell other menu than pizzas.
