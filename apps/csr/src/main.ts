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
  const counterElement = Counter();
  $Counter.appendChild(createElementFromHTML(counterElement));
  $target.appendChild($Counter);

  const $FirstTree = createElementFromHTML(Tree({ treeId: "1", treeName: "sub1" }));
  $target.appendChild($FirstTree);

  const $SecondTree = createElementFromHTML(Tree({ treeId: "2", treeName: "sub2" }));
  $target.appendChild($SecondTree);

  const $ThirdTree = createElementFromHTML(Tree({ treeId: "3", treeName: "sub3" }));
  $target.appendChild($ThirdTree);

  setupCounter($.querySelector<HTMLButtonElement>("#counter")!); // 이 ! << 얘가 if 역할인가?
  treeNavigator({ element: $.querySelector<HTMLButtonElement>(`#tree${1}`)!, treeId: "1" });
  treeNavigator({ element: $.querySelector<HTMLButtonElement>(`#tree${2}`)!, treeId: "2" });
  treeNavigator({ element: $.querySelector<HTMLButtonElement>(`#tree${3}`)!, treeId: "3" });
} else {
  alert(`에러 발생!`);
}
