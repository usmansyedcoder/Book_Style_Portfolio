import coverStyles from "./CoverPage.module.css";
import { coverInfo } from "../data/portfolio.js";

export default function CoverPage() {
  return (
    <div className={coverStyles.cover}>
      <div className={coverStyles.borderOuter}>
        <div className={coverStyles.borderInner}>
          <div className={coverStyles.topOrnament}>
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
          </div>

          <p className={coverStyles.edition}>{coverInfo.edition}</p>

          <div className={coverStyles.titleBlock}>
            <h1 className={coverStyles.title}>{coverInfo.title}</h1>
            <div className={coverStyles.titleRule} />
            <p className={coverStyles.subtitle}>{coverInfo.subtitle}</p>
          </div>

          <p className={coverStyles.tagline}>{coverInfo.tagline}</p>

          <div className={coverStyles.bottomBlock}>
            <div className={coverStyles.dividerLine} />
            <p className={coverStyles.year}>{coverInfo.year}</p>
          </div>

          <div className={coverStyles.bottomOrnament}>
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
          </div>
        </div>
      </div>
    </div>
  );
}
