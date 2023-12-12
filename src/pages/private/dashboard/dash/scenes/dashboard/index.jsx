import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { ventasGeneral } from '../../../../../../services/ventasService';
import { useState, useEffect } from "react";

export const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [totalVentasGeneral, setTotalVentasGeneral] = useState(null);
  const [totalOrdenes, setTotalOrdenes] = useState(null);
  const [cantidadVentasGeneral, setCantidadVentasGeneral] = useState(null);
  
  const totalV = async () => {
    try {
      const totalVentas = await ventasGeneral({ /* ... tu data si es necesaria */ });
      setTotalVentasGeneral(totalVentas.total_ventas_general);
    } catch (error) {
      console.error('Error al obtener el total de ventas generales', error);
    }
  };

  const totalO = async () => {
    try {
      const consOrdenes = await ventasGeneral({ /* ... tu data si es necesaria */ });
      setTotalOrdenes(consOrdenes.total_ordenes);
    } catch (error) {
      console.error('Error al obtener el total ordenes', error);
    }
  };

  const ventaCantidad = async () => {
    try {
      const cantidadVentasGeneral = await ventasGeneral({ /* ... tu data si es necesaria */ });
      setCantidadVentasGeneral(cantidadVentasGeneral.cantidad_ventas_general);
    } catch (error) {
      console.error('Error al obtener la cantidad de ventas generales', error);
    }
  };

  // Llama a la función al montar el componente
  useEffect(() => {
    totalV();
    totalO();
    ventaCantidad();
  }, []);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center" >
        <Header title="Bienvenido" />

        <Box borderRadius={4}>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              "&:hover":{
                backgroundColor: colors.primary[400]
              }
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Descargar reportes
          </Button>
        </Box>
      </Box>
      <br/>
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius={4}
        >
          <StatBox
            title={cantidadVentasGeneral}
            subtitle="Ventas obtenidas"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius={4}
        >
          <StatBox
            title={totalOrdenes}
            subtitle="Ordenes"
            progress="0.30"
            increase="+5%"
            icon={
              <RequestQuoteIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius={4}
        >
          <StatBox
            title="1,325,134"
            subtitle="Tráfico web"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius={3}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
            borderRadius={3}
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Ingresos generados
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          borderRadius={3}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Transacciones
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          borderRadius={3}
        >
          <Typography variant="h5" fontWeight="600">
            Ventas
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              {totalVentasGeneral}
            </Typography>
            <Typography>Sin costos</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius={3}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "20px 30px 10px 30px" }}
          >
            Monto por ventas
          </Typography>
          <Box height="280px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};