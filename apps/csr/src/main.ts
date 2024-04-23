import { Header } from "@repo/ui/header";
import { Tree } from "@repo/ui/tree";
import "./style.css";
import { Counter } from "@repo/ui/counter";
import { setupCounter } from "@repo/ui/setup-counter";
import { treeNavigator } from "@repo/ui/tree-navigator";
const $ = document;
const $target = $.querySelector<HTMLDivElement>("#app");

const createElementFromHTML = (htmlString: string): ChildNode => {
  const div = document.createElement("div");
  div.innerHTML = htmlString.trim();
  return div.firstChild as ChildNode;
};

if ($target) {
  const $Header = createElementFromHTML(Header({ title: "csr" }));
  $target.appendChild($Header);

  const $Counter = $.createElement("div");
  $Counter.className = "card";
  $Counter.appendChild(createElementFromHTML(Counter()));
  $target.appendChild($Counter);

  const $FirstTree = createElementFromHTML(Tree({ treeId: "1", treeName: "sub1" }));
  $target.appendChild($FirstTree);

  setupCounter($.querySelector<HTMLButtonElement>("#counter")!); // 이 ! << 얘가 if 역할인가?
  treeNavigator({ element: $.querySelector<HTMLButtonElement>(`#tree${1}`)!, treeId: "1" });
} else {
  alert(`에러 발생!`);
}
