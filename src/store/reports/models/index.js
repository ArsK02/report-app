import { createRealmContext } from "@realm/react";
import { Report } from "./Reports";

export const ReportsRealmContext = createRealmContext({
  schema: [Report]
});