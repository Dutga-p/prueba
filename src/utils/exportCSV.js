/**
 * @param {*} dtRef referencia a la tabla de datos
 * @param {*} selectionOnly si es true exporta solo los datos seleccionados; si es false exporta todos los datos
 */
export const exportCSV = (dtRef, selectionOnly) => {
  if (dtRef) {
    dtRef.exportCSV({ selectionOnly });
  }
};
