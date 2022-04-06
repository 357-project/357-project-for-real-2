import * as React from 'react';
import image from './Page2.png'

export function Logo(props) {


    const colors = ['#70D6FF', '#629460', '#FF9770', '#FFD670', '#FFD670', '#FF9770', '#629460', '#629460'];


    const styles = colors.map((color)=> {return {
        float: "left",
        fontSize: "50pt",
        color: color,
        fontFamily: 'Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif'
    }})

    styles[7]["float"] = "right";
    styles[7]["width"] = "50px";
    styles[7]["pt"] = "50px";

    console.log(styles[7]);

     return(
         <div>
            <h1 style={styles[0]}>C</h1>
            <h1 style={styles[1]}>o</h1>
            <h1 style={styles[2]}>d</h1>
            <h1 style={styles[3]}>e</h1>
            <h1 style={styles[4]}>-</h1>
            <h1 style={styles[5]}>i</h1>
            <h1 style={styles[6]}>t</h1>
             <h1 style={styles[6]}>o</h1>
             <img src={image} style={styles[7]}/>

        </div>
     )

}

// <img style="float: right;  width: 200px; pt:100px ; transform:rotate(45deg);" src="Page2.png">o</h1>