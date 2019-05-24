import Component from './Component.js';

class Sort extends Component {

    renderTemplate() {
        return /*html*/`
            <form class="sort">
                <label>
                    Sort by:
                    <select name="property">
                        <option value="first-name">First Name</option>
                        <option value="last-name">Last Name</option>
                        <option value="company">Company</option>
                    </select>
                </label>
            </form>
        `;
    }
}

export default Sort;