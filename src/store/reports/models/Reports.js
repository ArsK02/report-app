import { Realm } from "@realm/react";
import * as moment from 'moment';

export class Report extends Realm.Object {
  static add(title, dateStart = +moment.utc(), publications = 0, videos = 0, revisit = 0, studies = 0, completed = false) {
    return {
      _id: new Realm.BSON.ObjectId(),
      title: title,
      dateStart: dateStart,
      dateEnd: 0,
      onPause: false,
      publications: publications,
      videos: videos,
      revisit: revisit,
      studies: studies,
      note: '',
      completed: completed
    };
  }

  static schema = {
    name: "Report",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      title: "string",
      dateStart: "int",
      dateEnd: "int",
      pause: {
        type: "list",
        objectType: "ReportPause"
      },
      onPause: "bool",
      publications: "int",
      videos: "int",
      revisit: "int",
      studies: "int",
      note: "string",
      completed: "bool"
    },
  };
}
