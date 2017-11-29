/**
 * LocalController
 *
 * @description :: Server-side logic for managing locals
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  // GET / boat -> BoatController.find
  find: function (req, res) {
    Local.find()
      .then(data => res.json(data))
      .catch(err => res.serverError(err))
  },

  // GET / boat /: id -> BoatController.findOne
  findOne: function (req, res) {
    Local.find({ id: req.params.id })
      .then(data => res.json(data))
      .catch(err => res.serverError(err))
  },

  // POST / boat -> BoatController.create
  create: function (req, res) {
    Local.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.serverError(err))
  },

  // PUT / boat /: id -> BoatController.update
  update: function (req, res) {
    Local.update({ id: req.params.id }, req.body)
      .then(data => res.json(data))
      .catch(err => res.serverError(err))
  },

  // DELETE / boat /: id -> BoatController.destroy 
  destroy: function (req, res) {
    Local.destroy({ id: req.params.id })
      .then(data => res.json(data))
      .catch(err => res.serverError(err))
  }
}
