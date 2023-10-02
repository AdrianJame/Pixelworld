import './index.scss';
import { Link } from 'react-router-dom';

export default function PixelHome(){

    return(
        <div className='pagina-pixelhome'>
            <header className='pixelhome-cabe'>
                <section className='cabe-start'>
                    <img src='/assets/images/image 5.svg'/>
                    <h1><span>PIXEL</span>WORLD</h1>
                </section>

                <section className='cabe-meio'>
                    <p>Produtos</p>
                    <p>Categorias</p>
                    <p>Dúvidas</p>

                    <div className='cabe-meio-input'>
                        <input placeholder='' />
                        <img src='/assets/images/lupa.svg'/>
                    </div>
                </section>

                <section className='cabe-end'>
                    <Link>Login</Link>
                </section>
            </header>

            <section className='pixelhome-s1'>
                <div className='s1-textos'>
                    <h1><span>PIXELWORLD</span> O PORTAL PARA O MUNDO DOS GAMES</h1>
                    <p>Explorando o mundo dos consoles onde os sonhos se tornam realidade.</p>
                
                    <Link>Explorar Mais</Link>
                </div>

                <div className='s1-img'>
                    <img src='/assets/images/imageS1.svg'/>
                </div>
            </section>

            <section className='pixelhome-s2'>
                <h1>CADASTRAR NOVO PRODUTO</h1>

                <div className='s2-cadastro'>
                    <section className='s2-inputs'>
                        <select>
                            <option>CATEGORIAS</option>
                        </select>

                        <input placeholder='MARCA'/>
                        <input placeholder='NOME DO PRODUTO'/>
                    </section>

                    <section className='s2-linha'></section>

                    <section className='s2-inputs'>
                        <input placeholder='ESTOQUE'/>
                        <input placeholder='PREÇO'/>
                        <input placeholder='GARANTIA'/>
                    </section>

                </div>

                <Link>Salvar</Link>
            </section>
        </div>
    )
}