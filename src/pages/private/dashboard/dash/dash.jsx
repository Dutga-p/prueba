import React from 'react'
import {Dashboard} from "./scenes/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../dash/theme";
import "./dash.css"

export const Dash = () => {
  const [theme, colorMode] = useMode();
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className='space-y-6'> 
            <div className='flex flex-col sm:flex-row justify-between p-2'>
              <h1 className='text-white text-[1.8rem] mb-2'>Dashboard</h1>
            </div>
            <Dashboard />
          </div>
        </ThemeProvider>
    </ColorModeContext.Provider>
    )
  }