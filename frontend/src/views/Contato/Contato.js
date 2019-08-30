import React from 'react';

class Contato extends React.Component {
    render() {

        return (
            <div className="card bg-primary">
                <div className="card-header">
                    Contato
                </div>
                <div className="card-body ">
                 
                    <div className="bd-example">
                        <dl className="row">
                            <dt className="col-sm-3 text-right">
                            <i className="fa fa-home fa-lg mt-4"></i>
                             Endereço:</dt>
                            <dd className="col-sm-9 text-left">
                                <p>Instituto de Tecnologia de Pernambuco - ITEP</p>
                                <p>Bloco B, sala 21</p>
                                <p>Av. Prof Luiz Freire, 700, Cidade Universitária. Recife - PE</p>
                                <p>CEP 50740-540</p>
                                
                            </dd>

                            <dt className="col-sm-3 col-sm-3 text-right">
                            <i className="fa fa-envelope fa-lg mt-4"></i>
                             Email:</dt>
                            <dd className="col-sm-9">
                               <p></p> <p>noc@pop-pe.rnp.br</p>
                            </dd>

                

                            <dt className="col-sm-3 col-sm-3 text-right">
                            <i className="fa fa-phone fa-lg mt-4"></i>
                            Horário Comercial:</dt>
                            <dd className="col-sm-9"><p></p><p>(81) 3183.4305</p></dd>

                            
                        </dl>
                    </div>
                </div>
            </div>
           

        );
    }
}

export default Contato;