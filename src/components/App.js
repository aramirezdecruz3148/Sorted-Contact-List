import Component from './Component.js';
import Header from './Header.js';
import ContactTable from './ContactTable.js';
import contacts from '../../data/contacts.js';
import Sort from './Sort.js';
import sortTable from '../../src/sort-table.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        
        const header = new Header();
        const headerDOM = header.render();
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);
        
        const sort = new Sort({
            onSort: sortOptions => {
                const sorted = sortTable(contacts, sortOptions);
                contactTable.update({ contacts: sorted });
            }
        });
        const sortDOM = sort.render();
        main.appendChild(sortDOM);

        const contactTable = new ContactTable({ contacts });
        const tableDOM = contactTable.render();
        main.appendChild(tableDOM);
        
        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main></main>
            </div>
        `;
    }
}

export default App;