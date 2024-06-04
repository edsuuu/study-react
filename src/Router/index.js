import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import { BuscandoDadosExternos } from '../Pages/BuscandoDadosExternos';
import { BuscandoDadosInternos } from '../Pages/BuscandoDadosInternos';
import { TrocandoNome } from '../Pages/TrocandoNome';
import { LifeCicleMethodsParte1 } from '../Pages/LifeCicleMethodsParte1';
import { Contador } from '../Pages/Contador';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buscando-dados-externos" element={<BuscandoDadosExternos />} />
            <Route path="/buscando-dados-internos" element={<BuscandoDadosInternos />} />
            <Route path="/trocando-nome" element={<TrocandoNome />} />
            <Route path="/lifeCicle-methods-parte1" element={<LifeCicleMethodsParte1 />} />
            <Route path="/contador" element={<Contador />} />
        </Routes>
    );
}
