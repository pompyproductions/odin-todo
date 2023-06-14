import "./sass/styles.scss";
import domalt from "domalt";

const entry = document.querySelector("body");

entry.append(
  domalt.newElem({
    tag: "header",
    children: [
      {tag: "h1", content: "Main logo"}
    ]
  }),
  domalt.newElem({
    tag: "main",
    children: [
      {tag: "h2", content: "Hero goes here!"}
    ]
  }),
  domalt.newElem({
    tag: "footer",
    children: [
      {tag: "p", content: "Made by Pompy."}
    ]
  }),
)