export interface ModalContextUI {
  creditModalOpen: Boolean | any;
  handleOpenCreditModal: (value: Boolean) => void;
  detailModalOpen: Boolean | any;
  handleOpenDetailModal: (value: Boolean) => void;
}

export interface ModalProviderUI {
  children: React.ReactNode;
}
