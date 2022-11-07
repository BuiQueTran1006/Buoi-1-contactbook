const createContact = function (req, res, next) {
    res.send({ message: "create handler" });
  };
  
  const deleteAllContacts = function (req, res, next) {
    res.send({ message: "Delete All Contacts handler" });
  };
  
  const deleteContact = function (req, res, next) {
    res.send({ message: "Delete Contact handler" });
  };
  
  const getAllContacts = function (req, res, next) {
    res.send({ message: "Get All Contacts handler" });
  };
  
  const getAllFavorites = function (req, res, next) {
    res.send({ message: "Get All Favorite Contacts handler" });
  };
  
  const getContact = function (req, res, next) {
    res.send({ message: "Get Contact handler" });
  };
  
  const updateContact = function (req, res, next) {
    res.send({ message: "Update Contact handler" });
  };
  
  export default {
    createContact,
    deleteAllContacts,
    deleteContact,
    getAllContacts,
    getAllFavorites,
    getContact,
    updateContact,
  };