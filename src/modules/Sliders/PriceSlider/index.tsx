import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { formatNumber, parseFormatedNumber } from "../../../utils/formaters";
import { MAX_AMOUNT, MIN_AMOUNT } from "../../../constants";
import { PriceSliderUI } from "../../../models/SlidersUI";

import styles from "../styles.module.scss";

export default function PriceSlider({
  value,
  handleClickAmount,
}: PriceSliderUI): React.ReactElement {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parseData = parseFormatedNumber(e.target.value);
    handleClickAmount(parseData);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderHeader}>
        <p>MONTO TOTAL</p>
        <input
          onChange={handleOnChange}
          value={formatNumber(value, ".")}
          type="string"
          maxLength={10}
        />
      </div>
      <div className={styles.slider}>
        <Slider
          value={value}
          onChange={(value: number) => handleClickAmount(value)}
          min={MIN_AMOUNT}
          max={MAX_AMOUNT}
          trackStyle={{ backgroundColor: "#ffffff" }}
          railStyle={{ backgroundColor: "#ffffff" }}
          handleStyle={{
            borderColor: "#ffffff",
            backgroundColor: "#ffffff",
          }}
          activeDotStyle={{
            borderColor: "#000000",
            backgroundColor: "#000000",
          }}
        />
      </div>
      <div className={styles.sliderBottom}>
        <p>{formatNumber(MIN_AMOUNT, ".")}</p>
        <p>{formatNumber(MAX_AMOUNT, ".")}</p>
      </div>
    </div>
  );
}
