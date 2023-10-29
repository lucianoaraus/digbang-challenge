import { useEffect, useState } from "react";
import ModalMUI from "@mui/material/Modal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PaidIcon from "@mui/icons-material/Paid";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { formatNumber, parseFormatedNumber } from "./utils/formaters";

import styles from "./styles.module.scss";

const MIN_AMOUNT = 5000;
const MAX_AMOUNT = 50000;
const MIN_TERM = 3;
const MAX_TERM = 24;

export default function App(): JSX.Element {
  const [totalAmount, setTotalAmount] = useState<any>(19500);
  const [term, setTerm] = useState(3);
  const [monthlyDebts, setMonthlyDebts] = useState<number>(0);

  const [creditModalOpen, setCreditModalOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  useEffect(() => {
    const monthlyDebt = totalAmount / term;
    const formatetFloat = parseFloat(monthlyDebt.toFixed(2));
    setMonthlyDebts(formatetFloat);
  }, [totalAmount, term]);

  return (
    <div className={styles.appContainer}>
      <div className={styles.cardContainer}>
        <h1>Simulá tu crédito</h1>

        <div className={styles.sliderContainer}>
          <div className={styles.sliderHeader}>
            <p>MONTO TOTAL</p>
            <input
              onChange={(e) => {
                const parseData = parseFormatedNumber(e.target.value);
                setTotalAmount(parseData);
                if (parseData <= MIN_AMOUNT) {
                  setTotalAmount(MIN_AMOUNT);
                } else if (parseData >= MAX_AMOUNT) {
                  setTotalAmount(MAX_AMOUNT);
                }
              }}
              value={formatNumber(totalAmount, ".")}
              type="string"
            />
          </div>
          <div className={styles.slider}>
            <Slider
              value={totalAmount}
              onChange={(value: number) => setTotalAmount(value)}
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

        <div className={styles.sliderContainer}>
          <div className={styles.sliderHeader}>
            <p>PLAZO</p>
            <input
              onChange={(e) => {
                const value = e.target.value;
                const parseData = value === "" ? 0 : parseInt(value);
                setTerm(parseData);
                if (parseData <= MIN_TERM) {
                  setTerm(MIN_TERM);
                } else if (parseData >= MAX_TERM) {
                  setTerm(MAX_TERM);
                }
              }}
              value={term}
              type="string"
            />
          </div>
          <div className={styles.slider}>
            <Slider
              value={term}
              onChange={(value: number) => setTerm(value)}
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

        <div className={styles.bottomContainer}>
          <div className={styles.bottomHeaderContainer}>
            <p>CUOTA FIJA POR MES</p>
            <h2>{formatNumber(monthlyDebts, ",")}</h2>
          </div>

          <div className={styles.buttonsContainer}>
            <button
              className={styles.primaryButton}
              onClick={() => setCreditModalOpen(true)}
            >
              OBTENÉ CRÉDITO
            </button>
            <button
              className={styles.secondaryButton}
              onClick={() => setDetailModalOpen(true)}
            >
              VER DETALLE DE CUOTAS
            </button>
          </div>
        </div>
      </div>
      <ModalMUI
        open={creditModalOpen}
        onClose={() => setCreditModalOpen(false)}
      >
        <div className={styles.modalContainer}>
          <button
            className={styles.closeButton}
            onClick={() => setCreditModalOpen(false)}
          >
            <CloseIcon color="action" />
          </button>
          <CheckCircleIcon sx={{ fontSize: "5rem", color: "#17aa8d" }} />
          <h2>¡Crédito solicitado con éxito!</h2>
        </div>
      </ModalMUI>

      <ModalMUI
        open={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
      >
        <div className={styles.modalContainer}>
          <button
            className={styles.closeButton}
            onClick={() => setDetailModalOpen(false)}
          >
            <CloseIcon color="action" />
          </button>
          <PaidIcon sx={{ fontSize: "5rem", color: "#ebb141" }} />
          <h2>Detalle de cuotas a pagar:</h2>
          <p>
            {term} cuotas fijas de {formatNumber(monthlyDebts, ",")} por mes.
          </p>
        </div>
      </ModalMUI>
    </div>
  );
}
