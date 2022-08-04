import './styles/header.css'
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <>
            <header>
                <img src={logo} alt="hello" />
            </header>
            <p className='heading'>Let's calculate <b>distance</b> from Google maps</p>
        </>
    )
}

export default Header