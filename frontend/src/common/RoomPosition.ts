export function roomPosition(roomName: string | undefined): number {
  if (roomName === undefined) return 0;

  if (roomName.toLowerCase().includes('auditorium')) {
    return 0;
  } else if (roomName.toLowerCase().includes('showroom')) {
    return 1;
  } else if (roomName.toLowerCase().includes('fablab')) {
    return 2;
  } else {
    return 3
  }
}
