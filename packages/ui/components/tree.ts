import styles from "../styles/treeButton.module.css";

interface Tree {
  treeName: string;
  treeId: string;
}

export function Tree({ treeName, treeId }: Tree) {
  return `<button class=${styles.treeButton} id="tree${treeId}" type="button">${treeName}</button>`;
}
