export interface Comite {
    name: string,
    description: string,
    img: string,
    itsClosed: boolean ,
}
export interface Option {
//    interfaz de opcciones para colocar en el nav y otras cosas 
    text: string,
    link: string
}
export interface Ediciones{
    name: string,
    description: string,
}
export const logoSp = 'https://scontent-mia3-1.cdninstagram.com/v/t39.30808-6/395624708_18313594330104563_2064895392450816478_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent-mia3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=A2izCtnkHIEAX8oAfu_&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzIyMDIyNjczNDkxMzMwMTk4Mg%3D%3D.2-ccb7-5&oh=00_AfC5ovpE9s9SPpFvBhidkbSE1G1IiQgZ5BJ5GQqUdZumgg&oe=656175AC&_nc_sid=ee9879';

export const fechaModelo = new Date('2024-01-25');