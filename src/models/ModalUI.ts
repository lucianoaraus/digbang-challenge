export interface ModalUI {
  open: Boolean | any;
  onClose: () => void;
  icon: React.ReactElement;
  children: React.ReactElement;
}
