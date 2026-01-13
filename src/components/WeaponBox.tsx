import React, { useState } from 'react'

interface Weapon {
  id: number;
  name: string;
}

const weapons = [
  {id: 1, name: "Candlestick"},
  {id: 2, name: "Knife"},
  {id: 3, name: "Lead Pipe"},
  {id: 4, name: "Revolver"},
  {id: 5, name: "Rope"},
  {id: 6, name: "Wrench"},
]
export default function WeaponBox() {
 const [selectedWeapons, updateSelectedWeapons] = useState<Weapon[]>([]);

 const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { value, checked } = event.target;
  const weaponId = Number(value);
  const weaponToAdd = weapons.find((weapon) => weapon.id === weaponId);

  updateSelectedWeapons((prevSelectedWeapons) => {
    if (checked && weaponToAdd) {
      const alreadyChecked = prevSelectedWeapons.some((weapon) => weapon.id === weaponId);

      if (!alreadyChecked) {
        return [...prevSelectedWeapons, weaponToAdd];
      }
    } else if (!checked) {
      return prevSelectedWeapons.filter((weapon) => weapon.id !==weaponId);
    }
    return prevSelectedWeapons;
  });
 };

  return (
    <div>
      <h3>What?</h3>
      {weapons.map((weapon) => (
        <div key={weapon.id}>
          <label>
            <input type="checkbox"
            value={weapon.id}
            checked={selectedWeapons.some((w) => w.id === weapon.id)}
            onChange={handleCheckboxChange}
            />
            {weapon.name}
          </label>
          </div>
      ))}
    </div>
  )
}