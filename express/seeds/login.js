
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('login').del()
    .then(function () {
      // Inserts seed entries
      return knex('login').insert([
        {id: 1, name: 'Austin', email:'austintedwards@gmail.com', password:'password'}
      ]);
    });
};
