import '../css/index.css'
import Logo from '../assets/img/img.png'
export const Saludar = ( nombre ) => {


    const h1 = document.createElement( 'h1' );
    h1.innerHTML =` Hola ${ nombre } `;

    document.body.append( h1 );


    const img = document.createElement( 'img' );
    img.src = Logo;
    document.body.append( img );
}

