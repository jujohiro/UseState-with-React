// src/App.jsx
import React from 'react'
import './App.css' // Estilos específicos de la aplicación
import { Calculator } from './Componentes/calculator'
import {Welcome} from './Componentes/Welcome'
import { RegisterForm } from './Componentes/RegisterForm'
import { TaskCapture } from './Componentes/TaskCapture'
import { ToggleTheme } from './Componentes/ToggleTheme'
import { ThemeSwitcher } from './Componentes/ThemeSwitcher'
import { Theme } from './Componentes/Theme'

export const App =() => {
  return (
    <>
    <Calculator />
    < Welcome/>
    < RegisterForm/>
    < TaskCapture/>
    < ToggleTheme/>
    <ThemeSwitcher/>
    <Theme/>
    </>
      
      
   
  );
}
