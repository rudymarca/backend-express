const { faker } = require('@faker-js/faker');

class PersonServices {
  constructor() {
    this.person = [];
    this.generate();
  }

  generate() {
    const limit = 10;
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
  async create(data) {
    const newPerson = {
      id: faker.string.uuid(),
      prefix: faker.person.prefix(),
      firstName: data.firstName,
      lastName: data.lastName,
      fullName: `${data.firstName} ${data.lastName}`,
      gender: faker.person.gender(),
      avatar: faker.image.avatar(),
      sex: faker.person.sex(),
    };
    this.person.push(newPerson);
    return newPerson;
  }
  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.person);
      }, 5000);
    });
    // return this.person;
  }
  async findOne(id) {
    return this.person.find((item) => item.id === id);
  }
  async update(id, data) {
    const index = this.person.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new Error('Person not found');
    }

    this.person[index] = {
      ...this.person[index],
      firstName: data.firstName,
      lastName: data.lastName,
      fullName: `${data.firstName} ${data.lastName}`,
    };
    return this.person[index];
  }
  async delete(id) {
    const index = this.person.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new Error('Person not found');
    }
    this.person.splice(index, 1);
    return { id };
  }
}
module.exports = PersonServices;
