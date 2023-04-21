import { querySelector } from "../query.js";
import { Keyword } from "./Keyword.js";

export class Recent extends Keyword {
  constructor(keywordList) {
    super(keywordList);
  }

  appendDeleteBtn() {
    for (const item of querySelector.recentLists()) {
      const newImg = document.createElement("img");
      const insertNewImg = item.appendChild(newImg);
      insertNewImg.setAttribute("src", "./src/assets/svg/close.svg");
      insertNewImg.className = "delete-btn";
    }
  }

  appendRecentList() {
    this.appendListToChild(querySelector.recentKeywordList());
    this.appendDeleteBtn();
  }
}
