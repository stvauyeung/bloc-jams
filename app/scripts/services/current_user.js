angular.module('Services').service('currentUser', ['User', function(User) {
  var exampleUser = {
    name: 'John Doe',
    email: 'john@example.com',
    city: 'San Francisco',
    state: 'California',
    country: 'USA',
    credit_cards: [
      {
        company: 'VISA',
        number: 'XXXX-1234',
      },
      {
        company: 'MasterCard',
        number: 'XXXX-3929',
      }
    ]
  };

  return new User(exampleUser);
}]);
