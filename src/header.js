import logo from './assets/desktop/logo.svg'
import sun from './assets/desktop/icon-sun.svg'
import moon from './assets/desktop/icon-moon.svg'

export default function AppHeader() {
    return (
        <div className="header">
            <img src={logo} />
            <div className="toggle-container">
                <img src={sun} />
                <div className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </div>
                <img src={moon} />
            </div>
        </div>
    )
}