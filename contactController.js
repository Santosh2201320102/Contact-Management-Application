const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@description get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@description Create new contact
//@route POST /api/contacts/:id
//@access Public
const createContact = asyncHandler(async (req, res) => {
  console.log("Contact created :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    req.status(400);
    throw new Error("Please fill all fields");
  }

  const contacts = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contacts);
});

//@description get a specific contact
//@route GET /api/contact/:id
//@access Public
const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.findById(req.params.id);
  if (!Contact) {
    res.status(400);
    throw new Error("Contact not Found ! ");
  }
  res.status(200).json(Contact);
});

//@description update contacts
//@route PUT /api/contacts
//@access Public
const updateContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.findById(req.params.id);
  if (!Contact) {
    res.status(400);
    throw new Error("Contact not Found ! ");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

//@description delete contacts
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.findById(req.params.id);
  if (!Contact) {
    res.status(400);
    throw new Error("Contact not Found ! ");
  }

  await Contact.remove();
  res.status(200).json(contacts);
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
