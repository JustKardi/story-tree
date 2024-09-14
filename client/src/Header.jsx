import './Header.css';

function Header() {
    return (
        <div className='header'>
            <h1 className='header--title'>Story<span className='header--title__span'>Tree</span></h1>
            <p className='header--link'>Confirm Edits</p>
            <p className='header--link'>Add Story</p>
            <p className='header--link'>Edit Story</p>
            <p className='header--link header--link__right'><i class="fa-solid fa-magnifying-glass"></i></p>
            <p className='header--link header--link__right'><i class="fa-solid fa-user"></i></p>
        </div>
    );
}

export default Header;