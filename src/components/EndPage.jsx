import endStyles from "./EndPage.module.css";
import { endInfo } from "../data/portfolio.js";

export default function EndPage() {
  return (
    <div className={endStyles.end}>
      <div className={endStyles.borderOuter}>
        <div className={endStyles.borderInner}>
          <div className={endStyles.topOrnament}>✦</div>

          <div className={endStyles.centerBlock}>
            <h2 className={endStyles.closing}>{endInfo.closing}</h2>
            <div className={endStyles.rule} />
            <p className={endStyles.note}>{endInfo.note}</p>
          </div>

          <div className={endStyles.quoteBlock}>
            <p className={endStyles.quote}>"{endInfo.quote}"</p>
            <p className={endStyles.quoteAuthor}>{endInfo.quoteAuthor}</p>
          </div>

          <div className={endStyles.bottomBlock}>
            <div className={endStyles.dividerLine} />
            <p className={endStyles.year}>{endInfo.year}</p>
          </div>

          <div className={endStyles.bottomOrnament}>✦ ✦ ✦</div>
        </div>
      </div>
    </div>
  );
}
