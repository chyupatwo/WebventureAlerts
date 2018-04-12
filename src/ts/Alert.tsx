import {Type} from "./Type";
import AlertOptions from "./Options";

export default class Alert implements AlertInterface
{
    protected alertType: string;
    protected options: AlertOptions;

    constructor(type: string, options: AlertOptions) {

        if (!(this.alertType = this.checkType(type))) {
            throw `Type must be one of ${Object.keys(Type)
                .map(key => Type[key])
                .join(', ')}`;
        }

        this.options = options;
    }


    template = () => {
        return `<div class="alert alert-${this.alertType}" role="alert">
                    ${(title => title ? `<strong>${title}</strong>` : null)(this.options.title)}
                    ${(message => message ? message : null)(this.options.message)}
                </div>`
    };

    render() {
        return document.querySelector(this.options.container)
            .insertAdjacentHTML(this.options.placement, this.template());
    }

    private checkType = (type: string) => Object.keys(Type)
        .map(key => Type[key])
        .filter(value => value === type)
        .join('')

}

const alert = new Alert("success", {
    title: "Alert title",
    message: "Alert message",
    container: "body",
    placement: "beforebegin",
});
console.log(alert.template());