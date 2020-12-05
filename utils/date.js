import { DateTime } from "luxon";

export const formatDate = (date, locale) => {
  const dt = DateTime.fromISO(date);
  const dateFormatted = dt
    .setLocale(locale)
    .toLocaleString(DateTime.DATETIME_FULL);

  return dateFormatted;
};
