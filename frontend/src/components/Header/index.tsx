import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido com acompanhamento das aulas
                    <a href="https://www.instagram.com/devsuperior.ig">@leticiafontenelle</a>
                </p>
            </div>
        </header>

    )
}

export default Header