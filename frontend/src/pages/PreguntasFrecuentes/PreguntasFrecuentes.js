import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import "./PreguntasFrecuentes.scss";
import AccordionStyled from "./AccordionStyle";

export function PreguntasFrecuentes() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };
    scrollToTop();

    return (
        <Grid
            stackable
            style={{
                padding: "10px 10px",
                boxSizing: "border-box",
            }}
        >   
        <Grid.Row>
            <GridColumn className="columnFAQ">
                <h2 className="tituloPrincipal">PREGUNTAS FRECUENTES</h2>
                <div
                    className="contenedorAccordion"
                    style={{
                        width: "100%",
                        maxWidth: "1000px",
                        margin: "0 auto"
                    }}
                >
                    <AccordionStyled></AccordionStyled>
                </div>
            </GridColumn>
        </Grid.Row>
        </Grid>
    );
}