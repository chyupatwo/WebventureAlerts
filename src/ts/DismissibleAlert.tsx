import {Alert} from "./Alert";
import AlertOptions from "./Options";

export class DismissibleAlert extends Alert
{
    /**
     * Constructor
     *
     * @param {string} type
     * @param {AlertOptions} options
     */
    constructor(type: string, options: AlertOptions) {
        super(type, options);

    }

    /**
     * Created a new template function as the one from the base class returns a string instead of an Element
     *
     * @returns {HTMLDivElement}
     */
    dismissibleTemplate = () => {
        const button = this.createCloseButton();

        const alert = document.createElement('div');
        alert.setAttribute('role', 'alert');
        alert.classList.add('alert', `alert-${this.alertType}`, 'alert-dismissible');

        if (this.options.title) {
            const alertTitle = document.createElement('strong');
            alertTitle.innerText = this.options.title;
            alert.appendChild(alertTitle);
        }

        if (this.options.message) {
            const alertMessage = document.createElement('span');
            alertMessage.innerText = this.options.message;
            alert.appendChild(alertMessage);
        }

        alert.appendChild(button);

        button.onclick = () => {
            alert.remove();
        };

        return alert;
    };

    /**
     * Override the render function from the base class in order to append an Element instead of a string
     *
     */
    render = () => {
        this.options.container
            .insertAdjacentElement(this.options.placement, this.dismissibleTemplate());
    };

    /**
     * Create the close button
     *
     * @returns {HTMLButtonElement}
     */
    private createCloseButton = () => {
        const button = document.createElement('button');
        button.classList.add('close');
        button.setAttribute('data-dismiss', 'close');
        button.innerText = "X";

        return button;
    }
}

const alert = new DismissibleAlert("success", {
    title: "Dismissible alert title",
    message: "Dismissible alert message",
    container: document.querySelector('div'),
    placement: "afterend"
});
alert.render();
console.log(alert);


const alert2 = new DismissibleAlert("success", {
    title: "Dismissible alert title",
    message: "Dismissible alert message",
    container: document.querySelector('div'),
    placement: "afterend"
});
alert2.render();
