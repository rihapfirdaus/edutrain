export default function timeFormatter(dateString: string) {
  if (!dateString) {
    return "";
  }

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  return `${new Intl.DateTimeFormat("id-ID", timeOptions).format(
    new Date(dateString)
  )} WIB`;
}
