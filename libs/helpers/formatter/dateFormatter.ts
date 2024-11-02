export function dateFormatter(dateString: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }

  const year = date.getFullYear();
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const month = monthNames[date.getMonth()];
  const day = String(date.getDate()).padStart(2, "0");

  return `${day} ${month} ${year}`;
}

export function inputDateFormatter(dateString: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

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
