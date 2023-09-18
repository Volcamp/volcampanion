export function roomPosition(roomName : string) : number{
  if (roomName.toLowerCase().includes('auditorium')) {
    return 0;
  } else if (roomName.toLowerCase().includes('mezzanine')) {
    return 1;
  } else if (roomName.toLowerCase().includes('showroom')) {
    return 2;
  } else {
    return 3
  }
}
