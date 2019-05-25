function sortTable(contacts, sortOptions) {
    const property = sortOptions.property;
    
    return contacts.slice().sort((a, b) => {
        if(a[property] < b[property]) return -1;
        if(a[property] > b[property]) return 1;
        return 0;
    });
}

export default sortTable;