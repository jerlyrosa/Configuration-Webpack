export const Saludar = ( nombre ) => {
    console.log( 'Creando etiqueta h1' );

    const h1 = document.createElement( 'h1' );
    h1.innerHTML =` Hola ${ nombre } `;

    document.body.append( h1 )
}

