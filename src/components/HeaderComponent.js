import React from 'react'

const HeaderComponent = () => {
    return (
        <div>
            <header className='header'>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src="./orellion1.jpg" className='img-fluid mx-2' width={25} height={25}/>
                                Employee Management System
                        </a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent
