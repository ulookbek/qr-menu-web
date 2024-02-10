import React from 'react';
import { useParams } from "react-router-dom"

const Menu = () => {
    const { name } = useParams()
    return (
        <div>
            <h1>{name}</h1>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
        </div>
    );
};

export default Menu;
