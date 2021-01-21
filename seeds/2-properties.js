
exports.seed = function (knex) {
  return knex('properties').insert([
    { id: 1, occupant_id: 21, address: '207/43  Yelverton Place, Heathcote Valley, Townsville', type: 'apartment', rooms: 2, bathrooms: 1, garden: false, price: 250, image: 'images/apartment1' },
    { id: 2, occupant_id: 22, address: 'Boat Name, Berth 3, Raleigh Maria, Rowley, Townsville', type: 'houseboat', rooms: 3, bathrooms: 1, garden: false, price: 95, image: 'images/houseboat1' },
    { id: 3, occupant_id: 23, address: '172  Columbia Avenue, Barton, Townsville', type: 'house', rooms: 4, bathrooms: 2, garden: true, price: 450, image: 'images/house1' },
    { id: 4, occupant_id: 24, address: '13 Friday Street, Nightmare, Townsville', type: 'evil lair', rooms: 1, bathrooms: 1, garden: true, price: 666, image: 'images/lair1' },
    { id: 5, occupant_id: 25, address: '12/292  Kerr Street, Laurinburg, Townsville', type: 'apartment', rooms: 1, bathrooms: 1, garden: false, price: 200, image: 'images/apartment2' },
    { id: 6, occupant_id: 26, address: '26 Moana Terrace, Mowhanau, Townsville', type: 'house', rooms: 5, bathrooms: 3, garden: true, price: 600, image: 'images/house2' },
    { id: 7, occupant_id: 27, address: '8 Gracefield Street, Korakonui, Townsville', type: 'house', rooms: 2, bathrooms: 1, garden: false, price: 450, image: 'images/house3' },
    { id: 8, occupant_id: 28, address: 'Boat Name, Berth 10, Hannan Marina, Clarksville, Townsville', type: 'houseboat', rooms: 1, bathrooms: 1, garden: false, price: 100, image: 'images/houseboat2' },
    { id: 9, occupant_id: 29, address: '52/23  Moran Lane, Southbridge, Townsville', type: 'apartment', rooms: 3, bathrooms: 1, garden: true, price: 550, image: 'images/apartment3' },
    { id: 10, occupant_id: 30, address: '192/6  Ruahine Place, Lumsden, Townsville', type: 'apartment', rooms: 3, bathrooms: 2, garden: false, price: 325, image: 'images/apartment4' },
  ]);
}
