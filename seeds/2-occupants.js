exports.seed = function(knex) {
      return knex('table_name').insert([
        { id: 21, name: 'Kylie Desiree', interests: 'Cooking', allows_pets: true },
        { id: 22, name: 'Julie Marylu', interests: 'Sports', allows_pets: true },
        { id: 23, name: 'Shelby Dex', interests: 'Sports', allows_pets: false },
        { id: 24, name: 'Mojo Jojo', interests: 'Taking over Townsville', allows_pets: true },
        { id: 25, name: 'Arn Shannon', interests: 'Dancing', allows_pets: false },
        { id: 26, name: 'Fleur Tatiana', interests: 'Gaming', allows_pets: false },
        { id: 27, name: 'Leslie Bea', interests: 'Cooking', allows_pets: true },
        { id: 28, name: 'Clayton Gabe', interests: 'Dancing', allows_pets: false },
        { id: 29, name: 'Xavier Wilkie', interests: 'Dancing', allows_pets: true },
        { id: 30, name: 'Royston Rusty', interests: 'Gaming', allows_pets: false },
          ]);
    });
};
