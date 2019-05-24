const test = QUnit.test;

QUnit.module('sort table');

const example1 = {
    firstName: 'Cantu',
    lastName: 'Sullivan',
    company: 'IDETICA'
};
const example2 = {
    firstName: 'Pruitt',
    lastName: 'Montgomery',
    company: 'MANGELICA'
};
const example3 = {
    firstName: 'George',
    lastName: 'Nicholson',
    company: 'MALATHION'
};
const contacts = [example1, example2, example3];

test('sort on first name', assert => {
    // arrange
    const sortOptions = {
        property: 'firstName'
    };

    const sorted = sortTable(contacts, sortOptions);
    // act
    // assert
    assert.deepEqual(sorted, ['Cantu', 'George', 'Pruit']);
});