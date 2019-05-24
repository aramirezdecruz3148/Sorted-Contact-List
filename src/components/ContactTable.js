import Component from './Component.js';

class ContactTable extends Component {

    renderTemplate() {
        return /*html*/`
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Company</th>
                </tr>
            </table>
        `;
    }
}

export default ContactTable;