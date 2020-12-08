const Ring = function (name, description, order) {
  var self = {}

  self.name = function () {
    return name
  }

  self.order = function () {
    return order
  }

  self.desc = function () {
    return description
  }

  return self
}

module.exports = Ring
