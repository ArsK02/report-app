import { Realm } from "@realm/react";

export class Report extends Realm.Object {
  static generate(title) {
    return {
      _id: new Realm.BSON.ObjectId(),
      title
    };
  }

  static schema = {
    name: "Report",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      title: "string"
    },
  };
}
