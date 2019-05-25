import sortTable from '../src/sort-table.js';
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
    assert.deepEqual(sorted, [example1, example3, example2]);
});

test('sort on last name', assert => {
    // arrange
    const sortOptions = {
        property: 'lastName'
    };

    const sorted = sortTable(contacts, sortOptions);
    // act
    // assert
    assert.deepEqual(sorted, [example2, example3, example1]);
});

test('sort on company name', assert => {
    // arrange
    const sortOptions = {
        property: 'company'
    };

    const sorted = sortTable(contacts, sortOptions);
    // act
    // assert
    assert.deepEqual(sorted, [example1, example3, example2]);
});