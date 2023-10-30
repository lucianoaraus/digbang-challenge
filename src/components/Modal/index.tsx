import ModalMUI from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { ModalUI } from "../../models/ModalUI";

import styles from "./styles.module.scss";

export default function Modal({
  open,
  onClose,
  icon,
  children,
}: ModalUI): React.ReactElement {
  return (
    <ModalMUI open={open} onClose={onClose}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          <CloseIcon color="action" />
        </button>
        {icon}
        {children}
      </div>
    </ModalMUI>
  );
}
