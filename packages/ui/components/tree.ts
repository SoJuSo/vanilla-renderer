import style from "../styles/treeButton.module.css";

interface Tree {
  treeName: string;
  treeId: string;
}

export function Tree({ treeName, treeId }: Tree) {
  return `<button className=${style.treeButton} id="tree${treeId}" type="button">${treeName}</button>`;
}
