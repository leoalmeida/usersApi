/**
 * Defines the routes for user-related operations in the API.
 *
 * @param {object} app - The Express application instance.
 * @property {object} app.controllers.user - The user controller containing route handlers.
 *
 * Routes:
 * - GET /: Retrieves a list of users.
 * - POST /: Creates a new user.
 * - DELETE /:regid: Deletes a user by their registration ID.
 * - PUT /:regid: Updates a user by their registration ID.
 * - GET /:regid: Retrieves a single user by their registration ID.
 */

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rotas para operações CRUD de recursos

// User api route.
router.route("/user")
    .get(userController.listarItems)
    .post(userController.saveItem);

router.route('/user/:id')
    .delete(userController.removeItem)
    .put(userController.updateItem)
    .get(userController.getOneItem);


module.exports = router;

