// src/pages/Admin.jsx
import React, { useState, useEffect } from 'react';

function Admin() {
    const [produits, setProduits] = useState([]);

    // Récupère les données au chargement depuis localStorage
    useEffect(() => {
        const data = localStorage.getItem('produits');
        if (data) {
            setProduits(JSON.parse(data));
        }
    }, []);

    // Sauvegarde dans localStorage à chaque mise à jour
    useEffect(() => {
        localStorage.setItem('produits', JSON.stringify(produits));
    }, [produits]);

    return (
        <div>
            <h1>Interface Admin</h1>
            <p>Produits actuels : {produits.length}</p>
        </div>
    );
}

export default Admin;