# 개발 과정 기록용 MD파일

음...csr은 엄청 쉬운데..? 애초에 JS파일에 추가만 하면 되는 형태이니,, 코드 마무리만 짓고 정리해야겠다.

style을 적용하는 기준이 뭘까?
tree.ts에서만 스타일을 가져왔는데 자연스레 counter.ts파일에서도 버튼 스타일링이 적용되고 있다. <br />
왜냐하면 순수 style 코드이기에 button { } << 이런식으로 작성되면 `전역`으로 적용된다.

이를 해결할 방법은 CSS 모듈이다.

근데,,,,,, CSS 모듈을 적용하는 방법이 뭔가 복잡하다. 터보레포 환경을 아직 완벽하게 이해 못하기 때문에 그런 것 같은데 이부분은 내일 적용해봐야겠다.

---

240425

아래 코드와 그냥 통쨰로 html 코드를 return했을때 적용의 차이가 존재한다.<br />
아래 코드를 적용하면 CSS모듈이 적용이 안된다..?인줄 알았지만

```ts
const createElementFromHTML = (htmlString: string): ChildNode => {
  const div = document.createElement("div");
  div.innerHTML = htmlString.trim();
  console.log(div.firstChild);
  return div.firstChild as ChildNode;
};
```

className은 React에서 쓰이고 vanilla js에선 `class`이다..
