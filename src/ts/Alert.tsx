import {Type} from "./Type";
import AlertOptions from "./Options";

export class Alert implements AlertInterface
{
    protected alertType: string;
    protected options: AlertOptions;

    /**
     * Constructor
     *
     * @param {string} type
     * @param {AlertOptions} options
     */
    constructor(type: string, options: AlertOptions) {

        if (!(this.alertType = this.checkType(type))) {
            throw `Type must be one of ${Object.keys(Type)
                .map(key => Type[key])
                .join(', ')}`;
        }

        this.options = options;
        this.checkContainer(this.options.container);

    }

    /**
     * HTML string for the base alert template
     *
     * @returns {string}
     */
    template = () => {
        return `<div class="alert alert-${this.alertType}" role="alert">
                    ${(title => title ? `<strong>${title}</strong>` : null)(this.options.title)}
                    ${(message => message ? message : null)(this.options.message)}
                </div>`
    };

    /**
     * Insert the HTML string
     */
    render = () => {
        this.options.container
            .insertAdjacentHTML(this.options.placement, this.template());
    };

    /**
     * Check if type is one of the Type ones
     * @param {string} type
     * @returns {string}
     */
    private checkType = (type: string) => Object.keys(Type)
        .map(key => Type[key])
        .filter(value => value === type)
        .join('');


    /**
     * Check if the container has a parent element otherwise something will go terribly wrong
     *
     * @param {Element} container
     */
    private checkContainer = (container: Element) => {
        if (container.parentElement.tagName.toLowerCase() === 'html' && (this.options.placement === 'beforebegin' || this.options.placement === 'afterend')) {
            throw "The specified container is invalid. It needs to have a valid parent in order to use 'beforebegin' or 'afterend' placement";
        }
    }

}

const alert = new Alert("success", {
    title: "Alert title",
    message: "Alert message",
    container: document.querySelector('div'),
    placement: "beforebegin",
});
console.log(alert.template());