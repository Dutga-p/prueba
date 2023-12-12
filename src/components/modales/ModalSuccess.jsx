import { Dialog } from "primereact/dialog";
import React from "react";

export const ModalSuccess = ({ visible, onClose, successMessage }) => {
  return (
    <Dialog
      header="Éxito"
      visible={visible}
      onHide={onClose}
      className="max-w-lg mx-auto md:w-[50vw]"
    >
      <div className="flex-col-1 text-center">
        <pre className="p-4 font-sans text-lg">{successMessage}</pre>
        <div className="p-d-flex p-jc-end p-4">
          <button
            onClick={onClose}
            className="bg-green-600 text-white p-2 rounded"
          >
            ACEPTAR
          </button>
        </div>
      </div>
    </Dialog>
  );
};
