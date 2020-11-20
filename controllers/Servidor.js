'use strict';

var utils = require('../utils/writer.js');
var Servidor = require('../service/ServidorService');

module.exports.loginGET = function loginGET (req, res, next, email, password) {
  Servidor.loginGET(email, password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userUserIdDELETE = function userUserIdDELETE (req, res, next, userId) {
  Servidor.userUserIdDELETE(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userUserIdGET = function userUserIdGET (req, res, next, userId) {
  Servidor.userUserIdGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userUserIdPOST = function userUserIdPOST (req, res, next, userId) {
  Servidor.userUserIdPOST(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userUserIdPUT = function userUserIdPUT (req, res, next, userId) {
  Servidor.userUserIdPUT(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userdataUserIdDELETE = function userdataUserIdDELETE (req, res, next, userId) {
  Servidor.userdataUserIdDELETE(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userdataUserIdGET = function userdataUserIdGET (req, res, next, userId) {
  Servidor.userdataUserIdGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userdataUserIdPUT = function userdataUserIdPUT (req, res, next, userId) {
  Servidor.userdataUserIdPUT(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
