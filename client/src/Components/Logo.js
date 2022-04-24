import * as React from 'react';
import image from './Logo.png';

export function Logo(props) {

    // Choosing the base colors for the website
    const colors = ['#70D6FF', '#629460', '#FF9770', '#FFD670', '#FFD670', '#FF9770', '#629460', '#629460'];
    const styles = colors.map((color) => {
        return {
            float: "left",
            fontSize: "50pt",
            color: color,
            fontFamily: 'Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif'
        }
    })
    //styling the letters
    styles[7]["float"] = "right";
    styles[7]["width"] = "50px";
    styles[7]["pt"] = "50px";

    console.log(styles[7]);

    return (
        <div>
            {/* Display the logo with diffrent styles for each letter */}
            <h1 style={styles[0]}>C</h1>
            <h1 style={styles[1]}>o</h1>
            <h1 style={styles[2]}>d</h1>
            <h1 style={styles[3]}>e</h1>
            <h1 style={styles[4]}>-</h1>
            <h1 style={styles[5]}>i</h1>
            <h1 style={styles[6]}>t</h1>
            <h1 style={styles[0]}>o</h1>
            <img src={image} style={styles[7]} />
        </div>
    )
}