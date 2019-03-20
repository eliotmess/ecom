import React, { Component } from 'react';
import Header from '../modules/Header/Header';
import Footer from '../modules/Footer/Footer';
import './MainLayout.scss';


class MainLayout extends Component {
    render() {
        return(
            <div className='container'>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default MainLayout;