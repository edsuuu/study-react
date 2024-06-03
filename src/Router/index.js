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
            <Route path="/BuscandoDadosExternos" element={<BuscandoDadosExternos />} />
            <Route path="/BuscandoDadosInternos" element={<BuscandoDadosInternos />} />
            <Route path="/TrocandoNome" element={<TrocandoNome />} />
            <Route path="/LifeCicleMethodsParte1" element={<LifeCicleMethodsParte1 />} />
            <Route path="/Contador" element={<Contador />} />
        </Routes>
    );
}
