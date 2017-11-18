import { DateUtilsAPI } from "./date-utils.common";

export class DateUtils implements DateUtilsAPI {
  is24hFormat(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const dateFormat: string = NSDateFormatter.dateFormatFromTemplateOptionsLocale("j", 0, NSLocale.currentLocale);
      resolve(dateFormat.indexOf("a") === -1);
    });
  }
}