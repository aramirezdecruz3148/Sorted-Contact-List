import Component from './Component.js';

class ContactRow extends Component {

    renderTemplate() {
        const contact = this.props.contact;
        return /*html*/`
            <tr id="table-body">
                <td>${contact.firstName}</td>
                <td>${contact.lastName}</td>
                <td>${contact.company}</td>
            </tr>
        `;
    }
}

export default ContactRow;