interface StatusEvent {
  status: "new" | "expired" | "none";
}

export function eventStatusChecker(
  createdDate = "0",
  eventDate = "0"
): StatusEvent {
  const dateNow = new Date().getTime();
  const dateCreated = new Date(createdDate).getTime();
  const dateEvent = new Date(eventDate).getTime();

  const dateDiffByToday = (dateNow - dateCreated) / (1000 * 60 * 60 * 24);

  if (dateEvent != 0 && dateNow > dateEvent) {
    return { status: "expired" };
  } else if (dateDiffByToday <= 2) {
    return { status: "new" };
  } else {
    return { status: "none" };
  }
}

export enum EventStatus {
  Registered = "Telah Terdaftar",
  Past = "Pendaftaran telah ditutup",
  Open = "Daftar Sekarang",
  Registering = "mendaftar...",
}
