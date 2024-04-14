const store = require("../../../store/dummy");

const TABLE = "user";

module.exports = function (injectedStore) {
  let store = injectedStore || require("../../../store/dummy");

  function list() {
    return store.list(TABLE);
  }

  function get(id) {
    return store.get(TABLE, id);
  }

  function upsert(data) {
    return store.upsert(TABLE, data);
  }

  return {
    list,
    get,
  };
};