import React, { useState, useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../../dash/theme";
import { ventasGeneral } from "../../../../../services/ventasService";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [totalOrders, setTotalOrders] = useState(null);
  const [totalVehicles, setTotalVehicles] = useState(null);
  const [totalParts, setTotalParts] = useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if it's a mobile device

  const fetchTotals = async () => {
    try {
      const totals = await ventasGeneral();
      setTotalOrders(totals.total_ordenes);
      setTotalVehicles(totals.total_ventas_vehiculos);
      setTotalParts(totals.total_ventas_repuestos);
    } catch (error) {
      console.error("Error fetching sales totals", error);
    }
  };

  // Llama a la función al montar el componente
  useEffect(() => {
    fetchTotals();
  }, []);

  const chartData = [
    { label: "Órdenes", value: totalOrders, color: colors.blueAccent[100] },
    { label: "Vehículos", value: totalVehicles, color: colors.greenAccent[500] },
    { label: "Repuestos", value: totalParts, color: colors.redAccent[500] },
  ];

  return (
    <ResponsiveBar
      data={chartData}
      theme={{
        textColor: colors.grey[100],
        fontFamily: theme.typography.fontFamily,
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      keys={["value"]}
      indexBy="label"
      margin={{
        top: isMobile ? 50 : 30,
        right: isMobile ? 30 : 30,
        bottom: isMobile ? 90 : 50,
        left: isMobile ? 30 : 60,
      }}
      padding={0.2}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={(bar) => bar.data.color} // Asigna el color desde la propiedad "color" de cada dato
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
    />
  );
};

export default BarChart;
