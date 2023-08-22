const express = require("express");

const {
  getAllContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateFavorite,
} = require("../../controllers/contactsControllers");

const { contactsSchema, updateFavoriteSchema } = require("../../schemas");
const { validateBody } = require("../../decorators");
const { validation } = require("../../decorators");

const router = express.Router();

router.get("/", getAllContacts);

router.get("/:contactId", getContactById);

router.post("/", validateBody(contactsSchema), addContact);

router.delete("/:contactId", removeContact);

router.put("/:contactId", validateBody(contactsSchema), updateContact);

router.patch(
  "/:contactId/favorite",
  validation(updateFavoriteSchema),
  updateFavorite
);

module.exports = router;
