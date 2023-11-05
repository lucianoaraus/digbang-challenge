import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { MAX_TERM, MIN_TERM } from "../../../constants";
import { BasicSliderUI } from "../../../models/SlidersUI";

import styles from "../styles.module.scss";

export default function BasicSlider({
  value,
  handleClickTerm,
}: BasicSliderUI): React.ReactElement {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderHeader}>
        <p>PLAZO</p>
        <input
          onChange={(e) => {
            const value = e.target.value;
            const parseData = value === "" ? 0 : parseInt(value);
            handleClickTerm(parseData);
          }}
          value={value}
          type="string"
          maxLength={2}
        />
      </div>
      <div className={styles.slider}>
        <Slider
          value={value}
          onChange={(value: number) => handleClickTerm(value)}
          min={MIN_TERM}
          max={MAX_TERM}
          trackStyle={{ backgroundColor: "#ffffff" }}
          railStyle={{ backgroundColor: "#ffffff" }}
          handleStyle={{
            borderColor: "#ffffff",
            backgroundColor: "#ffffff",
          }}
        />
      </div>
      <div className={`${styles.sliderBottom} ${styles.termSliderBottom}`}>
        <p>{MIN_TERM}</p>
        <p>{MAX_TERM}</p>
      </div>
    </div>
  );
}
