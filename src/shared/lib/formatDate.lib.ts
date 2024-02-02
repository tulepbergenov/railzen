import { format, parseISO } from "date-fns";

export const formatDate = (date: string): string => {
  const parsedTime = parseISO(date);

  const formattedTime = format(parsedTime, "dd.MM.yyyy");

  return formattedTime;
};
