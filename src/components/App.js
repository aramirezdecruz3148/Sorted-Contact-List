import Component from './Component.js';
import Header from './Header.js';
import ContactTable from './ContactTable.js';
import contacts from '../../data/contacts.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        
        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

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