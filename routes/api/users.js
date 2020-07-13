const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router
  .route("/")
  .get(usersController.findAll)
  .post(usersController.create);

  // Should Match with "/api/users/city/:city"
router
  .route("/city/:city")
  .get(usersController.findByCity);

 // Should Match with "/api/users/signin" (for sign in page). 
 router
 .route("/signin")
 .get(usersController.findOne);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);



module.exports = router;
