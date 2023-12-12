import React, { useState } from "react";
import { BotonEliminar, ModalConfirmar } from "../../../../../components";
import { deleteUserData } from "../../../../../services/userService";

const BotonEliminarUsuario = ({ data }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const abrirModal = () => {
    setModalVisible(true);
  };

  const onClose = () => {
    setModalVisible(false);
  };

  const eliminarUsuario = async () => {
    try {
      const response = await deleteUserData(data.idUsuario);
      window.location.reload();
    } catch (error) {
      console.log("error");
      var mensajeError = "";
      for (const property in error.response.data) {
        mensajeError += property + ": " + error.response.data[property] + "\n";
      }
      alert(mensajeError);
    } finally {
      onClose();
    }
  };

  return (
    <>
      <BotonEliminar accion={abrirModal} />

      {modalVisible && (
        <ModalConfirmar
          visibleModal={modalVisible}
          onClose={onClose}
          confirmar={eliminarUsuario}
        >
          <h3>
            ¿Está seguro que desea eliminar el usuario{" "}
            <span className="font-semibold">{data.username}</span>?
          </h3>
        </ModalConfirmar>
      )}
    </>
  );
};

export default BotonEliminarUsuario;
