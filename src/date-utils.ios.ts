export class DateUtils {
  public static is24hFormat(): Promise<boolean> {
    return new Promise(resolve => {
      const dateFormat: string = NSDateFormatter.dateFormatFromTemplateOptionsLocale("j", 0, NSLocale.currentLocale);
      resolve(dateFormat.indexOf("a") === -1);
    });
  }
}