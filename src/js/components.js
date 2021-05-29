import '../css/index.css'
import Logo from '../assets/img/logo.jpg'
export const Saludar = ( nombre ) => {
    console.log( 'Creando etiqueta h1' );

    const h1 = document.createElement( 'h1' );
    h1.innerHTML =` Hola ${ nombre } `;

    document.body.append( h1 )


    const img = document.createElement( 'img' );
    img.src = Logo;
    document.body.append( img );
}

