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

function sortTable(contacts, sortOptions) {
    const property = sortOptions.property;
    
    return contacts.slice().sort((a, b) => {
        if(a[property] < b[property]) return -1;
        if(a[property] > b[property]) return 1;
        return 0;
    });
}

test('sort on first name', assert => {
    // arrange
    const sortOptions = {
        property: 'firstName'
    };

    const sorted = sortTable(contacts, sortOptions);
    // act
    // assert
    assert.deepEqual(sorted, [example1, example3, example2]);
});