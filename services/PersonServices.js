const { faker } = require('@faker-js/faker');

class PersonServices {
  constructor() {
    this.person = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.person.push({
        id: faker.string.uuid(),
        prefix: faker.person.prefix(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        fullName: faker.person.fullName(),
        gender: faker.person.gender(),
        avatar: faker.image.avatar(),
        sex: faker.person.sex(),
      });
    }
  }
  create() {}
  find() {
    return this.person;
  }
  findOne(id) {
    return this.person.find((item) => item.id === id);
  }
  update() {}
  delete() {}
}
module.exports = PersonServices;
