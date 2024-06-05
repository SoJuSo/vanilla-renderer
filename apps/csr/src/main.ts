import { Header } from "@repo/ui/header";
import { Tree } from "@repo/ui/tree";
import "./style.css";
import { Counter } from "@repo/ui/counter";
import { setupCounter } from "@repo/ui/setup-counter";
import { treeNavigator } from "@repo/ui/tree-navigator";
import { createElementFromHTML } from "./util";

const route = async () => {
  const { pathname } = location;
  if (pathname === "/") {
    // 루트인 경우
    if ($target) {
      const $Header = createElementFromHTML(Header({ title: "csr Home" }));
      $target.appendChild($Header);

      const $Counter = $.createElement("div");
      $Counter.className = "card";
      const counterElement = Counter();
      $Counter.appendChild(createElementFromHTML(counterElement));
      $target.appendChild($Counter);

      setupCounter($.querySelector<HTMLButtonElement>("#counter")!);
    }
  } else {
    console.log(pathname);
  }
};

const $ = document;
const $target = $.querySelector<HTMLDivElement>("#app");

if ($target) {
  const trees = [
    { treeId: "1", treeName: "sub1", color: "red" },
    { treeId: "2", treeName: "sub2" },
    { treeId: "3", treeName: "sub3", color: "green" },
  ];

  trees.forEach(({ treeId, treeName, color }) => {
    const treeElement = createElementFromHTML(Tree({ treeId, treeName, color }));
    $target.appendChild(treeElement);

    const buttonElement = $.querySelector<HTMLButtonElement>(`#tree${treeId}`);
    if (buttonElement) {
      treeNavigator({ element: buttonElement, treeId });
      buttonElement.addEventListener("click", () => route());
    }
  });
} else {
  alert(`에러 발생!`);
}

window.addEventListener("popstate", () => route());

route();
