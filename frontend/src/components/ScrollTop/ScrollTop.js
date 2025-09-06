import React, { useState, useEffect } from "react";
import "./ScrollTop.scss";
import { Icon } from 'semantic-ui-react'

/**
 * Componente que muestra un icono para volver al inicio de la página cuando se hace scroll hacia abajo.
 * @returns {JSX.Element} Elemento JSX que contiene el icono para volver al inicio de la página.
 */
export function ScrollTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showButton && window.scrollY > 100){
                setShowButton(true);
            } else if (showButton && window.scrollY <= 100){
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showButton]);

    return showButton && (
        <div className="contenedorIcon" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <Icon name="chevron circle up" size="big"></Icon>
        </div>
    );
}