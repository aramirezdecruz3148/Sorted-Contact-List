import Component from './Component.js';
import ContactRow from './ContactRow.js';

class ContactTable extends Component {
    render() {
        const contactList = this.renderDOM();
        const contacts = this.props.contacts;

        contacts.forEach(contact => {
            const contactRow = new ContactRow({ contact });
            const contactRowDOM = contactRow.render();
            contactList.appendChild(contactRowDOM);
        });
        return contactList;
    }

    renderTemplate() {
        return /*html*/`
            <table>
                <tr class="head">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Company</th>
                </tr>
            </table>
        `;
    }
}

export default ContactTable;