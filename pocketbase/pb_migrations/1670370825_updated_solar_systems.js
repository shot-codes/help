migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("j6ton9wxs3htqc9");

    collection.listRule = null;

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("j6ton9wxs3htqc9");

    collection.listRule = "";

    return dao.saveCollection(collection);
  }
);
