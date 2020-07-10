const router = require("express").Router();
const usersRoutes = require("./books");

// Book routes
router.use("/books", usersRoutes);

module.exports = router;
