interface Tree {
  treeName: string;
  treeId: string;
}

export function Tree({ treeName, treeId }: Tree) {
  return `<button className="tree" id="${treeId}" type="button">${treeName}</button>`;
}
