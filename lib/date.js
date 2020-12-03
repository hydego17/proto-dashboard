import { DateTime } from "luxon";

export const formatDate = (date) => {
  const dt = DateTime.fromISO(date, { locale: "id" });
  const dateFormatted = dt.setLocale("id").toLocaleString(DateTime.DATE_FULL);

  return dateFormatted;
};
