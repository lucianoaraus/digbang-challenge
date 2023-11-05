import React, { useContext, useEffect, useState } from "react";
import ModalContext from "./components/Modal/ModalContext";
import PriceSlider from "./modules/Sliders/PriceSlider";
import BasicSlider from "./modules/Sliders/BasicSlider";
import Modal from "./components/Modal";
import Bottom from "./modules/Bottom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PaidIcon from "@mui/icons-material/Paid";
import { formatNumber, adaptedAmount, adaptedTerm } from "./utils/formaters";

import styles from "./styles.module.scss";

export default function App(): React.ReactElement {
  const {
    handleOpenCreditModal,
    handleOpenDetailModal,
    creditModalOpen,
    detailModalOpen,
  } = useContext(ModalContext);
  const [totalAmount, setTotalAmount] = useState<number>(19500);
  const [term, setTerm] = useState<number>(3);
  const [monthlyDebts, setMonthlyDebts] = useState<number>(0);

  useEffect(() => {
    const monthlyDebt = adaptedAmount(totalAmount) / adaptedTerm(term);
    const formatetFloat = parseFloat(monthlyDebt.toFixed(2));
    setMonthlyDebts(formatetFloat);
  }, [totalAmount, term]);

  const handleClickAmount = (value: number) => setTotalAmount(value);
  const handleClickTerm = (value: number) => setTerm(value);

  return (
    <div className={styles.appContainer}>
      <div className={styles.cardContainer}>
        <h1>Simulá tu crédito</h1>

        <PriceSlider
          value={totalAmount}
          handleClickAmount={handleClickAmount}
        />
        <BasicSlider value={term} handleClickTerm={handleClickTerm} />

        <Bottom monthlyDebts={monthlyDebts} />
      </div>
      <Modal
        open={creditModalOpen}
        onClose={() => handleOpenCreditModal(false)}
        icon={<CheckCircleIcon sx={{ fontSize: "5rem", color: "#17aa8d" }} />}
      >
        <h2>¡Crédito solicitado con éxito!</h2>
      </Modal>
      <Modal
        open={detailModalOpen}
        onClose={() => handleOpenDetailModal(false)}
        icon={<PaidIcon sx={{ fontSize: "5rem", color: "#ebb141" }} />}
      >
        <>
          <h2>Detalle de cuotas a pagar:</h2>
          <p>
            {adaptedTerm(term)} cuotas fijas de{" "}
            {formatNumber(monthlyDebts, ",")} por mes
          </p>
        </>
      </Modal>
    </div>
  );
}
