import React from "react"
import { Route, Routes } from "react-router-dom";

/* Universal */
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Unidade from "./components/unidade/Unidade"

import Confirmation from './components/confirmation/Confirmation'
import Released from './components/confirmation/Released'

/* Manejo */
import Manejo from "./components/unidades/manejo/home/Manejo";
import ProfissionaisManejo from './components/unidades/manejo/profissionais/ProfissionaisManejo'
import DataManejo from './components/unidades/manejo/datas/DatasManejo'
import HorariosManejo from './components/unidades/manejo/horarios/HorariosManejo'

/* Patiomix */
import Patiomix from "./components/unidades/patiomix/home/Patiomix";

/* Rensede */
import Resende from "./components/unidades/resende/home/Resende";



export default () => {

    return(
            <Routes className='bg-[#1A1A1A] h-screen w-screen flex flex-col items-center overflow-hidden'>
                <Route path="/" caseSensitive={false} element={<Home />}/>
                <Route path="/login" caseSensitive={false} element={<Login />}/>
                <Route path="/register" caseSensitive={false} element={<Register />}/>
                <Route path="/unidade" caseSensitive={false} element={<Unidade />}/>
                <Route path="/manejo" caseSensitive={false} element={<Manejo />}/>
                <Route path="/patiomix" caseSensitive={false} element={<Patiomix />}/>
                <Route path="/resende" caseSensitive={false} element={<Resende />}/>
                <Route path="/manejo/profissionaismanejo" caseSensitive={false} element={<ProfissionaisManejo />}/>
                <Route path="/manejo/datasmanejo" caseSensitive={false} element={<DataManejo />}/>
                <Route path="/manejo/horarios-manejo" caseSensitive={false} element={<HorariosManejo />}/>
                <Route path="/confirmation" caseSensitive={false} element={<Confirmation />}/>
                <Route path="/released" caseSensitive={false} element={<Released />}/>
            </Routes>
    );
}