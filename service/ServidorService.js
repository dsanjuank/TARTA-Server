'use strict';

/**
 * Devuelve los datos de un usuario
 * Devuelve los datos de un usuario
 *
 * email String email del usuario
 * password String contraseña del usuario
 * no response value expected for this operation
 **/

exports.loginGET = function(email,password) {
  return new Promise(function(resolve, reject) {
    const user = {
      name: 'Pepito',
      surname: 'Garcia',
      age: Math.floor(Math.random() * 30) + 70
    }

    resolve(user);
  });
}


/**
 * Inserta un nuevo usuario
 * Inserta un nuevo usuario
 *
 * no response value expected for this operation
 **/
exports.userPOST = function(body) {
  return new Promise(function(resolve, reject) {
    const user = req.body;

    resolve(body);
  });
}


/**
 * Elimina un usuario
 * Elimina un usuario
 *
 * userId String Identificador del usuario
 * no response value expected for this operation
 **/
exports.userUserIdDELETE = function(userId) {
  return new Promise(function(resolve, reject) {
    const result = {};

    resolve(result);
  });
}


/**
 * Devuelve los datos personales de un usuario
 * Devuelve los datos personales de un usuario
 *
 * userId String Identificador del usuario
 * no response value expected for this operation
 **/
exports.userUserIdGET = function(userId) {
  return new Promise(function(resolve, reject) {
    const user = {
      name: 'Pepito',
      surname: 'Garcia',
      age: Math.floor(Math.random() * 30) + 70
    }

    resolve(user);
  });
}


/**
 * Modifica los datos personales de un usuario
 * Modifica los datos personales de un usuario
 *
 * userId String Identificador del usuario
 * no response value expected for this operation
 **/
exports.userUserIdPUT = function(userId, body) {
  return new Promise(function(resolve, reject) {
    const user = {
      name: 'Pepito',
      surname: 'Garcia',
      age: Math.floor(Math.random() * 30) + 70
    }

    const result = {...user, ...body }

    resolve(result);
  });
}


/**
 * Borra los datos de constantes vitales de un usuario
 * Borra los datos de constantes vitales de un usuario
 *
 * userId String Identificador del usuario
 * no response value expected for this operation
 **/
exports.userdataUserIdDELETE = function(userId) {
  return new Promise(function(resolve, reject) {
    const result = {};

    resolve(result);
  });
}


/**
 * Devuelve los datos de constantes vitales de un usuario
 * Devuelve los datos de constantes vitales de un usuario
 *
 * userId String Identificador del usuario
 * no response value expected for this operation
 **/
exports.userdataUserIdGET = function(userId) {
  return new Promise(function(resolve, reject) {
    const results = [
      {
        ppm: 78,
        temperature: 37.5,
        date: new Date()
      },
      {
        ppm: 76,
        temperature: 37.4,
        date: new Date()
      },
      {
        ppm: 79,
        temperature: 37.7,
        date: new Date()
      }
    ]

    resolve(results);
  });
}


/**
 * Modifica los datos de constantes vitales de un usuario
 * Modifica los datos de constantes vitales de un usuario
 *
 * userId String Identificador del usuario
 * no response value expected for this operation
 **/
exports.userdataUserIdPUT = function(userId, body) {
  return new Promise(function(resolve, reject) {
    const datauser = {
      ppm: 79,
      temperature: 37.7,
      date: new Date()
    }

    const result = {...datauser, ...body }

    resolve(result);
  });
}

