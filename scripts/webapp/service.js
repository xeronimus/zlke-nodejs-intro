const repo = require('./repository');

module.exports = {
  getAllStudents
};

function getAllStudents() {
  return repo.getAllStudents();
}
