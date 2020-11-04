import React from 'react';
import Slider from './carousel';

const Inicio = () => {

    return (
        <div className='container'>
            <h1>enhorabuena</h1>
            <div className='pInicio'>

                <p>Inmediatamente compartiré contigo una de las posibles formas en las que
                puedes aprender un lenguaje de programación.
            </p>
                <Slider />
                <p>
                    Te hablaré desde mi experiencia y espero que te sea provechosa.
            </p>

                <p>
                    Un curso de pago o una carrera universitaria son opciones supervalidas PERO
                    si aún no estás decidido o no es de tu interés por el momento
                    la información que te expongo te resultará de lo más atractiva.
            </p>
                <p>
                    Aquí encontrarás libros, sitios webs, consejos, ejemplos de código. Todo de forma
                    organizada para que puedas decidir que hacer y cómo.
            </p>
                <p>
                    Si yo pude, creeme, tú también podrás. Incluso, podrás mejorar el camino y señalarselo
                    a los que vengan despues de tí.
            </p>

                <p>
                    Quizás algún día resuelvas algo como esto y verás que la magia si
                existe: <a href='https://www.proveyourworth.net/level3/start'
                        target='_blank' rel=' nofollow noopener noreferrer'>
                        https://www.proveyourworth.net/level3/start</a>.
            </p>
            </div >

        </div >

    )
}

export default Inicio