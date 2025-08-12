const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controller/contactController");

router.route("/").get(getContacts);

router.route("/").post(createContact);

// Get a specific contact
router.route("/:id").get(getContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);



//export the router
module.exports = router;
