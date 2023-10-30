import { createContext, useState } from "react";
import { ModalContextUI, ModalProviderUI } from "../../models/ModalContextUI";

const ModalContext = createContext<ModalContextUI>({
  creditModalOpen: Boolean,
  handleOpenCreditModal: () => {},
  detailModalOpen: Boolean,
  handleOpenDetailModal: () => {},
});

const ModalProvider = ({ children }: ModalProviderUI) => {
  const [creditModalOpen, setCreditModalOpen] = useState<Boolean>(false);
  const [detailModalOpen, setDetailModalOpen] = useState<Boolean>(false);

  const handleOpenCreditModal = (value: Boolean) => setCreditModalOpen(value);
  const handleOpenDetailModal = (value: Boolean) => setDetailModalOpen(value);

  const data: ModalContextUI = {
    creditModalOpen,
    handleOpenCreditModal,
    detailModalOpen,
    handleOpenDetailModal,
  };

  return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>;
};

export { ModalProvider };
export default ModalContext;
