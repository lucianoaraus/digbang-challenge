import { useContext } from "react";
import ModalContext from "../../components/Modal/ModalContext";
import { formatNumber } from "../../utils/formaters";
import { BottomUI } from "../../models/BottomUI";

import styles from "./styles.module.scss";

export default function Bottom({ monthlyDebts }: BottomUI) {
  const { handleOpenCreditModal, handleOpenDetailModal } =
    useContext(ModalContext);

  return (
    <div className={styles.bottomContainer}>
      <div className={styles.bottomHeaderContainer}>
        <p>CUOTA FIJA POR MES</p>
        <h2>{formatNumber(monthlyDebts, ",")}</h2>
      </div>

      <div className={styles.buttonsContainer}>
        <button
          className={styles.primaryButton}
          onClick={() => handleOpenCreditModal(true)}
        >
          OBTENÉ CRÉDITO
        </button>
        <button
          className={styles.secondaryButton}
          onClick={() => handleOpenDetailModal(true)}
        >
          VER DETALLE DE CUOTAS
        </button>
      </div>
    </div>
  );
}
