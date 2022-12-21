function greet(sentence) {
  return `Please ${this.name}, you must wait ${sentence}`;
}

const client = {
  name: 'Gor',
};

const clientService = greet.bind(client);

console.log(clientService('until we fix your phone'));
