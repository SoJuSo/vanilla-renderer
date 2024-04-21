import { Header } from "@repo/ui/header";
import "./style.css";
import typescriptLogo from "/typescript.svg";
import { Counter } from "@repo/ui/counter";
import { setupCounter } from "@repo/ui/setup-counter";
const $ = document;
const $target = $.querySelector<HTMLDivElement>("#app");

const createElementFromHTML = (htmlString: string): ChildNode => {
  const div = document.createElement("div");
  div.innerHTML = htmlString.trim();
  return div.firstChild as ChildNode;
};

if ($target) {
  $target.innerHTML = `
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      ${Header({ title: "csr" })}
      <div class="card">
        ${Counter()}
      </div>
    </div>
    `;

  // const $Header = $.createElement("div");
  const $Header = createElementFromHTML(Header({ title: "csr" }));
  $target.appendChild($Header);

  setupCounter($.querySelector<HTMLButtonElement>("#counter")!);
} else {
  alert(`에러 발생!`);
}
