export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, position) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        const para = document.createElement("p");
        h4.innerText = heading;
        li.appendChild(h4);
        para.innerText = item.format();
        li.append(para);
        if (position == "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
