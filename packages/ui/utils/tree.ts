export function treeNavigator({ element, treeId }: { element: HTMLButtonElement; treeId: string }) {
  const moveURL = (url: string) => {
    history.pushState(null, "", `/${url}`);
  };
  element.addEventListener("click", () => moveURL(treeId));
}
