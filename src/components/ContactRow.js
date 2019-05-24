import Component from './Component.js';

class ContactRow extends Component {

    renderTemplate() {
        const contact = this.props.contact;
        return /*html*/`
            <tr>
                <td>${contact.firstName}</td>
                <td>${contact.lastName}</td>
                <td>${contact.company}</td>
            </tr>
        `;
    }
}

export default ContactRow;