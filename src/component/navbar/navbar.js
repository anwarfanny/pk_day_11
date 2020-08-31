import React from"react";
import Button from"../Button/Button";

const navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-lg navbar-light bg-light">
                <a class="navbar-brand" href="/#">
                    Navbar
                </a>
                <button 
                class="navbar-toggler"
                type= "button"
                data-toggler="collapse"
                data-target="#navbarNavDropdown"
                aria-aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="nsvbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/#">
                                Home <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#">
                                Features
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#">
                                pricing
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a 
                            class="nav-link dropdown-toggler"
                            href="/#"
                            id="button"
                            data-toggler="dropdown"
                            aria-hospopup="true"
                            aria-expanded="false"
                            >
                                Dropdown link
                            </a>
                            <div
                            class="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                            >
                                <a class="dropdown-item" href="/#">
                                    Action
                                </a>
                                <a class="dropdown-item" href="/#">
                                    Another action
                                </a>
                                <a class="dropdown-item" href="/#">
                                    something else here
                                </a>
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline">
                        <input
                        class="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        />
                        <button text="search"/>
                    </form>
                </div>
            </nav>
        </div>
    );
};