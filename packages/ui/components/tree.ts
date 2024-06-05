import styles from "../styles/treeButton.module.css";

interface Tree {
  treeName: string;
  treeId: string;
  color?: string;
}

export function Tree({ treeName, treeId, color }: Tree) {
  const buttonStyle = {
    color: color || "yellow",
  };

  return `<button style=${Object.entries(buttonStyle)
    .map(([key, value]) => `${key}:${value}`)
    .join(";")} class=${styles.treeButton} id="tree${treeId}" type="button">${treeName}</button>`;
}
