import React, { useState } from 'react';

interface Room {
  id: number;
  room: string;
}

const rooms = [
  { id: 1, room: 'Billiard Room' },
  { id: 2, room: 'Study' },
  { id: 3, room: 'Hall' },
  { id: 4, room: 'Lounge' },
  { id: 5, room: 'Dining Room' },
  { id: 6, room: 'Ballroom' },
  { id: 7, room: 'Conservatory' },
  { id: 8, room: 'Library' },
  { id: 9, room: 'Kitchen' },
];
export default function RoomBox() {
  const [selectedRooms, updateSelectedRooms] = useState<Room[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const roomId = Number(value);
    const roomToAdd = rooms.find((room) => room.id === roomId);

    updateSelectedRooms((prevSelectedRooms) => {
      if (checked && roomToAdd) {
        const alreadyChecked = prevSelectedRooms.some(
          (room) => room.id === roomId
        );

        if (!alreadyChecked) {
          return [...prevSelectedRooms, roomToAdd];
        }
      } else if (!checked) {
        return prevSelectedRooms.filter((room) => room.id !== roomId);
      }
      return prevSelectedRooms;
    });
  };

  return (
    <div>
      <h3>Select rooms where the crime did not happen</h3>
      {rooms.map((room) => (
        <div key={room.id}>
          <label>
            <input
              type='checkbox'
              value={room.id}
              checked={selectedRooms.some((r) => r.id === room.id)}
              onChange={handleCheckboxChange}
            />
            {room.room}
          </label>
        </div>
      ))}
    </div>
  );
}
