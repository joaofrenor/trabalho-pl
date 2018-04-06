import React from 'react'

const Alunos = props => {
    return (
        <div>
            <section className='page-section about-heading'>
                <div className='container'>
                    <img
                        className='img-fluid rounded about-heading-img mb-3 mb-lg-0'
                        src=''
                        alt=''/>
                    <div className='about-heading-content'>
                        <div className='row'>
                            <div className='col-xl-9 col-lg-10 mx-auto'>
                                <div className='bg-faded rounded p-5'>
                                    <center>
                                        <h2 className='section-heading mb-4'>
                                            <span className='section-heading-lower'>Participantes</span>
                                        </h2>
                                        <h3>João Felipe</h3>
                                        <h3>Pedro Vitor</h3>
                                        <h3>Gabriel Perreira
                                        </h3>
                                        <h3>Igor Riscado
                                        </h3>
                                        <h3>Rogério Luís</h3>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Alunos