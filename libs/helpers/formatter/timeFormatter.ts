export default function timeFormatter(timestamp: string) {
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  return `${new Intl.DateTimeFormat("id-ID", timeOptions).format(
    new Date(timestamp)
  )} WIB`;
}
