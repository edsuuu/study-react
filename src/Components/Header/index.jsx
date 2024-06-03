import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {

    const links = [
        { text: 'Home', path: '/' },
        { text: 'BuscandoDadosExternos', path: '/BuscandoDadosExternos' },
        { text: 'BuscandoDadosInternos', path: '/BuscandoDadosInternos' },
        { text: 'Contador', path: '/Contador' },
        { text: 'LifeCicleMethodsParte1', path: '/LifeCicleMethodsParte1' },
        { text: 'TrocandoNome', path: '/TrocandoNome' },

    ];

    return (
        <nav>
            {links.map((link, index) => (
                <Link className='links' key={index} to={link.path}>{link.text}</Link>
            ))}
        </nav>
    );
}
