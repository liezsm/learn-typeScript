import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(item: HasFormatter, heading: string, position: "start" | "end") {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    const para = document.createElement("p");

    h4.innerText = heading;
    li.appendChild(h4);

    para.innerText = item.format();

    li.append(para);

    if (position == "start") {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}
