const Contact = require("../models/contact");
const { HttpError } = require("../Helpers");
const { controllerWrapper } = require("../decorators");

const getAllContacts = async (req, res, next) => {
  try {
    const docs = await Contact.find().exec();
    return res.send(docs);
  } catch (error) {
    next(error);
  }
};

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;

  try {
    const docs = await Contact.findById(contactId).exec();

    if (docs === null) {
      throw HttpError(404, "Not found");
    }

    return res.send(docs);
  } catch (error) {
    next(error);
  }
};

const addContact = async (req, res, next) => {
  try {
    const doc = await Contact.create(req.body);
    res.status(201).send(doc);
  } catch (error) {
    next(error);
  }
};

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const result = await Contact.findByIdAndRemove(contactId).exec();

    if (result === null) {
      throw HttpError(404, "Not found");
    }

    res.send({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
};

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;

  try {
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    }).exec();

    if (result === null) {
      throw HttpError(404, "Not found");
    }

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

const updateFavorite = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    }).exec();
    if (result === null) {
      throw HttpError(404, "Not Found");
    }
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllContacts: controllerWrapper(getAllContacts),
  getContactById: controllerWrapper(getContactById),
  addContact: controllerWrapper(addContact),
  removeContact: controllerWrapper(removeContact),
  updateContact: controllerWrapper(updateContact),
  updateFavorite: controllerWrapper(updateFavorite),
};
