import { COLLECTIONS_DATA } from "../data/collectionsData.js";

export function getCollectionsData(req, res) {
  res.json(COLLECTIONS_DATA);
}
