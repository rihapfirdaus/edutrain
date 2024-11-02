export function formatDateWithOffset(dateString: string) {
  if (!dateString) {
    throw new Error("Invalid date string");
  }

  const formattedDate = dateString.replace(/Z$/, "+07:00");

  return formattedDate;
}

export function dateFormatter(dateString: string): string {
  if (!dateString) {
    return "";
  }

  const dateOptions: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  const date = formatDateWithOffset(dateString);
  return new Intl.DateTimeFormat("id-ID", dateOptions).format(new Date(date));
}

export function inputDateFormatter(dateString: string): string {
  if (!dateString) {
    return "";
  }

  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return "";
  }

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const formatter = new Intl.DateTimeFormat("en-CA", options);
  const parts = formatter.formatToParts(date);

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  return `${year}-${month}-${day}`;
}

export function ISOFormatter(dateString: string) {
  const regex = /(\d{4})[\/-](\d{2})[\/-](\d{2})/;
  const match = dateString.match(regex);

  if (!match) {
    throw new Error(
      'Invalid date format. Please use "yyyy-mm-dd" or "yyyy/mm/dd".'
    );
  }

  const year = parseInt(match[1], 10);
  const month = parseInt(match[2], 10) - 1;
  const day = parseInt(match[3], 10);

  const date = new Date(year, month, day);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date value.");
  }

  return date.toISOString().split("T")[0];
}
