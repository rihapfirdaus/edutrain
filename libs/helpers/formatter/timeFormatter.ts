import { formatDateWithOffset } from "./dateFormatter";

export default function timeFormatter(dateString: string) {
  if (!dateString) {
    return "";
  }

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const date = formatDateWithOffset(dateString);
  return `${new Intl.DateTimeFormat("id-ID", timeOptions).format(
    new Date(date)
  )} WIB`;
}
