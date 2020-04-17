import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png'


export default class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <Link to="/">
                        <img
                        className="navbar-brand"
                        src={logo}
                        alt="Logo"
                        style={{
                            width: 50,
                        }}
                        />
                    </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Our products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#">Contact Us</a>
                    </li>
                    </ul>
                </div>
            </nav>

        )
    }
}

