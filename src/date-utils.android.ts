import { ad } from "tns-core-modules/utils/utils";

export class DateUtils {
  public static is24hFormat(): Promise<boolean> {
    return new Promise(resolve => {
      resolve(android.text.format.DateFormat.is24HourFormat(ad.getApplicationContext()));
    });
  }
}