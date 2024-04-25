import style from "../styles/counter.module.css";

export function Counter() {
  // const $Button = document.createElement("button");
  // $Button.className = style.counter;
  // $Button.id = "counter";
  // $Button.type = "button";

  // return $Button;
  return `<button class=${style.counter} id="counter" type="button"></button>`;
}
