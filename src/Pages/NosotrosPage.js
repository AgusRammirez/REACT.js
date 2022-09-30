import React from "react";

import "../Styles/components/pages/NosotrosPage.css";

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="cultura">
                <h2>Cultura</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum id quibusdam excepturi, debitis
                    cupiditate nesciunt distinctio amet ut facere neque tempore inventore exercitationem assumenda, veniam
                    dolore in placeat ipsam molestias.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ducimus placeat impedit veniam suscipit
                    labore, aliquid tenetur deleniti quod nesciunt officiis blanditiis nobis beatae natus expedita iste
                    illum praesentium laboriosam!</p>
            </div>
            <div className="equipo">
                <h2>Equipo</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="./img/dueña.jpg" alt="dueña" />
                        <h5>Maria Gomez</h5>
                        <h6>Dueña</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicin elit. Minima ratione dolores quam maiores expedita qui neque, optio laboriosam odit enim delectus aspernatur deleniti quod sapiente rem. Dolorem voluptates repellendus magni!
                        </p>
                    </div>
                    <div className="persona">
                        <img src="./img/marketing.jpg" alt="marketing" />
                        <h5>Daniel Gutierrez</h5>
                        <h6>Gerente Marketing</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicin elit. Minima ratione dolores quam maiores expedita qui neque, optio laboriosam odit enim delectus aspernatur deleniti quod sapiente rem. Dolorem voluptates repellendus magni!
                        </p>
                    </div>
                    <div className="persona">
                        <img src="./img/biologa.jpg" alt="biologa" />
                        <h5>Isabella Ovei</h5>
                        <h6>Bióloga</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicin elit. Minima ratione dolores quam maiores expedita qui neque, optio laboriosam odit enim delectus aspernatur deleniti quod sapiente rem. Dolorem voluptates repellendus magni!
                        </p>
                    </div>
                    <div className="persona">
                        <img src="./img/gerente.jpg" alt="gerente" />
                        <h5>Micaela Perez</h5>
                        <h6>Gerente General</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicin elit. Minima ratione dolores quam maiores expedita qui neque, optio laboriosam odit enim delectus aspernatur deleniti quod sapiente rem. Dolorem voluptates repellendus magni!
                        </p>
                    </div>
                    <div className="persona">
                        <img src="./img/rrhh.jpg" alt="rrhh" />
                        <h5>Antonella Gonzalez</h5>
                        <h6>Recursos Humanos</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicin elit. Minima ratione dolores quam maiores expedita qui neque, optio laboriosam odit enim delectus aspernatur deleniti quod sapiente rem. Dolorem voluptates repellendus magni!
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;