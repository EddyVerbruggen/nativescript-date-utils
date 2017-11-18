import { DateUtilsAPI } from "./date-utils.common";
import { ad } from "tns-core-modules/utils/utils";

export class DateUtils implements DateUtilsAPI {
  is24hFormat(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      resolve(android.text.format.DateFormat.is24HourFormat(ad.getApplicationContext()));
    });
  }
}