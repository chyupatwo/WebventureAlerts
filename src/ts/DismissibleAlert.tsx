import Alert from "./Alert";
import AlertOptions from "./Options";

export default class DismissibleAlert extends Alert
{
    /**
     *
     * @param {string} type
     * @param {AlertOptions} options
     */
    constructor(type: string, options: AlertOptions) {
        super(type, options);
    }

    template = () => {
        return `<div class="alert alert-${this.alertType} alert-dismissible" role="alert">
                    ${(title => title ? `<strong>${title}</strong>` : null)(this.options.title)}
                    ${(message => message ? message : null)(this.options.message)}
                </div>`
    }
}

const alert = new DismissibleAlert("success", {
    title: "Dismissible alert title",
    message: "Dismissible alert message",
    container: "body",
    placement: "afterend"
});

console.log(alert.template());