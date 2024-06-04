import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {

    const links = [
        { text: 'Home', path: '/' },
        { text: 'BuscandoDadosExternos', path: '/buscando-dados-externos' },
        { text: 'BuscandoDadosInternos', path: '/buscando-dados-internos' },
        { text: 'Contador', path: 'contador' },
        { text: 'LifeCicleMethodsParte1', path: '/lifeCicle-methods-parte1' },
        { text: 'TrocandoNome', path: '/trocando-nome' },

    ];

    return (
        <nav>
            {links.map((link, index) => (
                <Link className='links' key={index} to={link.path}>{link.text}</Link>
            ))}
        </nav>
    );
}
