/**
 * Local.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: {
      type: 'string',
      required: true
    },

    nombre_contacto: {
      type: 'string',
      required: true
    },

    telefono_contacto: {
      type: 'string',
      required: true
    },

    direccion: {
      type: 'string',
      required: true
    },

    distrito: {
      type: 'string',
      required: true
    },

    estado_id: {
      type: 'int',
      enum: [1, 2],
      defaultsTo: 1
    }

  }
};

