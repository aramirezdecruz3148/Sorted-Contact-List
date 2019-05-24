import Component from './Component.js';

class Sort extends Component {
    render() {
        const dom = this.renderDOM();
        const form = dom.querySelector('form');

        form.addEventListener('submit', event => event.preventDefault());
        
        form.addEventListener('input', () => {
            const formData = new FormData(form);
            const sortOptions = {
                property: formData.get('property')
            };
            this.props.onSort(sortOptions);
        });
        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <section>
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
        </section>
        `;
    }
}

export default Sort;