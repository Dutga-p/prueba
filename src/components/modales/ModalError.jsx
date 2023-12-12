import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import React from "react";

export const ModalError = ({ errorMessage, visible, onClose }) => {
  const botones = () => {
    return (
      <>
        <Button label="Confirmar" severity="sucess" onClick={onClose} />
      </>
    );
  };

  return (
    <Dialog
      header="Error"
      visible={visible}
      onHide={onClose}
      className="max-w-lg mx-auto md:w-[50vw]"
    >
      <div className="flex-col-1 text-center">
        <pre className="p-4 font-sans text-lg">{errorMessage}</pre>
        <div className="p-d-flex p-jc-end p-4">
          <button
            onClick={onClose}
            className="bg-red-600 text-white p-2 rounded"
          >
            ACEPTAR
          </button>
        </div>
      </div>
    </Dialog>
  );
};
