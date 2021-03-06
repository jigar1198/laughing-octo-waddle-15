const express = require("express");
const router = express.Router();

const uploadMulti = require("../utils/uploadMulti.util");
const authController = require("../controllers/auth.controller");
const requestValidator = require("../controllers/req.controller");
const documentController = require("../controllers/document.controller");

router
  .route("/invoice")
  .post(
    authController.protectRoute,
    authController.accessTo("client"),
    uploadMulti.uploadMultiFiles,
    requestValidator.invoiceFile,
    documentController.userUploadsInvoice
  );

router
  .route("/15cb/:id")
  .post(
    authController.protectRoute,
    authController.accessTo("admin"),
    uploadMulti.uploadFile,
    requestValidator.form15CB,
    documentController.adminUploads15CB
  );

router
  .route("/15ca/:id")
  .post(
    authController.protectRoute,
    authController.accessTo("client"),
    uploadMulti.uploadFile,
    requestValidator.form15CA,
    documentController.upload15Ca
  );

router
  .route("/xml/:id")
  .post(
    authController.protectRoute,
    authController.accessTo("admin"),
    uploadMulti.uploadFile,
    requestValidator.xml,
    documentController.uploadXML
  );

router
  .route("/transcations")
  .get(authController.protectRoute, documentController.getTranscations);

router
  .route("/transcations/:id")
  .get(documentController.getTranscationByID)
  .patch(documentController.updateTranscationByID);

module.exports = router;
