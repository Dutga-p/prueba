import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import carpdf from "../../assets/img/carpdf.png";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  page: {
    flexDirection: "column",
  },
  header: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLogo: {
    width: "20%",
    height: "20%",
  },
  body: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  table: {
    width: "100%",
    border: "1px solid black",
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1px solid black",
  },
  tableCell: {
    borderRight: "1px solid black",
    padding: 5,
    flex: 1,
    textAlign: "center",
  },
});

export const FacturaVentaPDF = ({ venta }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Concesionario JJ</Text>
        <Text style={{ fontWeight: "bold", fontSize: 14, color: "blue" }}>
          ConcesionarioJJ.COM
        </Text>
      </View>

      <View style={styles.body}>
        <View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: "4vw" }}>FACTURA</Text>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <View style={{ textAlign: "start" }}>
                <Text>N° Factura:</Text>
                <Text>Fecha:</Text>
                <Text>Sucursal:</Text>
              </View>
              <View style={{ textAlign: "end" }}>
                <Text style={{ fontWeight: "bold" }}>{venta.idFactura}</Text>
                <Text style={{ fontWeight: "bold" }}>{venta.fecha}</Text>
                <Text style={{ fontWeight: "bold" }}>{venta.sucursal}</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={{ color: "blue", fontWeight: "bold", fontSize: "3vw" }}>
              Facturado a:
            </Text>
            <View style={{ fontWeight: "bold", textAlign: "end" }}>
              <Text>{venta.idCliente}</Text>
              <Text>{venta.nombreCliente}</Text>
              <Text>{venta.apellidoCliente}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ padding: 10 }}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>ID</Text>
            <Text style={styles.tableCell}>Carro</Text>
            <Text style={styles.tableCell}>Cantidad</Text>
            <Text style={styles.tableCell}>Precio</Text>
            <Text style={styles.tableCell}>Total</Text>
          </View>
          {venta.detalleVenta.map((detalle) => (
            <View key={detalle.idDetalleVenta} style={styles.tableRow}>
              <Text style={styles.tableCell}>{detalle.idDetalleVenta}</Text>
              <Text style={styles.tableCell}>{detalle.idCarro}</Text>
              <Text style={styles.tableCell}>{detalle.cantidad}</Text>
              <Text style={styles.tableCell}>{detalle.precio}</Text>
              <Text style={styles.tableCell}>
                {detalle.precio * detalle.cantidad}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <View style={{ flexDirection: "column", gap: 2 }}>
          <Text style={{ fontWeight: "bold", fontSize: "2vw" }}>Total a pagar:</Text>
          <Text style={{ fontWeight: "bold", fontSize: "2vw" }}>Metodo de pago:</Text>
        </View>
        <View style={{ flexDirection: "column", gap: 2, textAlign: "end" }}>
          <Text style={{ fontWeight: "bold", fontSize: "2vw" }}>{venta.totalPagar}</Text>
          <Text style={{ fontWeight: "bold", fontSize: "2vw" }}>{venta.metodoPago}</Text>
        </View>
      </View>

      <View style={{ padding: 10 }}>
        <View style={styles.footer}>
          <View style={{ flexDirection: "column", gap: 2 }}>
            <Text style={{ fontWeight: "bold", fontSize: "2vw" }}>Direccion:</Text>
            <Text style={{ fontWeight: "bold", fontSize: "2vw" }}>Telefono:</Text>
          </View>
          <View style={{ flexDirection: "column", gap: 2, textAlign: "end" }}>
            <Text style={{ fontWeight: "bold", fontSize: "2vw" }}>Calle 123</Text>
            <Text style={{ fontWeight: "bold", fontSize: "2vw" }}>123456789</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
