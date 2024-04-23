import "../styles/tree.style.css";

interface Tree {
  treeName: string;
  treeId: string;
}

export function Tree({ treeName, treeId }: Tree) {
  return `<button className="tree" id="tree${treeId}" type="button">${treeName}</button>`;
}
