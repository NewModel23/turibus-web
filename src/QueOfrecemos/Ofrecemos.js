import React, { useState } from "react";
import styles from "./style.css";
import LoginPopup from "../login/LoginPopup";

const Ofrecemos = ({ isEditable }) => {
  const [content, setContent] = useState("Initial content");

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleEditClick = () => {
    <LoginPopup />;
  };

  const handleSaveClick = () => {};

  return (
    <div>
      {isEditable ? (
        <input type="text" value={content} onChange={handleContentChange} />
      ) : (
        <div>
          <div className="encabezado">¿Qué ofrecemos en Turibus?</div>

          <div className="subtexto">
            Aliquam magna augue, elementum eget suscipit porta, ultrices at
            metus. Aliquam luctus massa ut tristique suscipit. Phasellus vel
            purus eleifend, vulputate tellus ut, luctus nulla. Curabitur
            ultricies sagittis vestibulum. Praesent a massa neque. In commodo in
            mauris id lacinia.
          </div>

          <div class="containerOfrecemos">
            <div class="tabs-ofrecemos">
              <input type="radio" id="tab1" name="tab-control" checked />
              <input type="radio" id="tab2" name="tab-control" />
              <input type="radio" id="tab3" name="tab-control" />
              <input type="radio" id="tab4" name="tab-control" />
              <input type="radio" id="tab5" name="tab-control" />

              <ul>
                <li title="Circuitos" for="tab1" role="button">
                  <label for="tab1" role="button">
                    <br />
                    <span>
                      <img src="https://quadtricssolutions.com/NewHtml/img/v1.png" />
                    </span>
                  </label>
                  Circuitos
                </li>

                <li title="Experiencias">
                  <label for="tab2" role="button">
                    <br />
                    <span>
                      <img src="https://quadtricssolutions.com/NewHtml/img/v2.png" />
                    </span>
                  </label>
                  Experiencias
                </li>

                <li title="Servicios Especiales">
                  <label for="tab3" role="button">
                    <br />
                    <span>
                      <img src="https://quadtricssolutions.com/NewHtml/img/v3.png" />
                    </span>
                  </label>
                  Servicios Especiales
                </li>

                <li title="Atracciones">
                  <label for="tab4" role="button">
                    <br />
                    <span>
                      <img src="https://quadtricssolutions.com/NewHtml/img/v4.png" />
                    </span>
                  </label>
                  Atracciones
                </li>

                <li title="Turitour">
                  <label for="tab5" role="button">
                    <br />
                    <span>
                      <img src="https://quadtricssolutions.com/NewHtml/img/v5.png" />
                    </span>
                  </label>
                  Turitour
                </li>
              </ul>
              <div class="slider-ofrecemos">
                <div class="indicator-ofrecemos"></div>
              </div>
              <div class="content">
                <section>
                  <div class="group-child-ofrecemos">
                    <img
                      class="group-item-ofrecemos"
                      alt=""
                      src="https://quadtricssolutions.com/NewHtml/img/bus.png"
                    />
                    <b class="title-text-ofrecemos">Circuitos</b>
                    <div class="descripcion-ofrecemos">
                      Paséate en recorridos Hop On/Hop Off (poder subir, bajar
                      y/o trasbordar en cualquier estación) por las zonas más
                      importantes dentro de la ciudad. Baja y sube cuantas veces
                      quieras en el mismo día.
                    </div>
                    <div class="menu-button-ofrecemos">
                      <div class="menu-button-ofrecemos-child"></div>
                      <a href="www.google.com">
                        <div class="link-ofrecemos"></div>
                      </a>
                      <a href="www.google.com">
                        <b class="conocer-mas-ofrecemos">Conocer más</b>
                      </a>
                    </div>
                  </div>
                </section>
                <section>
                  <div class="group-child-ofrecemos">
                    <img
                      class="group-item-ofrecemos"
                      alt=""
                      src="https://www.turibus.com.mx/documents/1085398/1086113/bannernocturno_desk.jpg"
                    />
                    <b class="title-text-ofrecemos">Experiencias</b>
                    <div class="descripcion-ofrecemos">
                      Date una vuelta por las atracciones y lugares más cool de
                      la ciudad o cercanas a la misma. Vive y divertirte durante
                      algunas horas como la gente local.
                    </div>
                    <div class="menu-button-ofrecemos">
                      <div class="menu-button-ofrecemos-child"></div>
                      <a href="www.google.com">
                        <div class="link-ofrecemos"></div>
                      </a>
                      <a href="www.google.com">
                        <b class="conocer-mas-ofrecemos">Conocer más</b>
                      </a>
                    </div>
                  </div>
                </section>
                <section>
                  <div class="group-child-ofrecemos">
                    <img
                      class="group-item-ofrecemos"
                      alt=""
                      src="https://www.turibus.com.mx/documents/1085398/1086113/galerianoc01_desk.jpg"
                    />
                    <b class="title-text-ofrecemos">Servicios Especiales</b>
                    <div class="descripcion-ofrecemos">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vehicula rhoncus enim at volutpat. Vivamus vitae nunc
                      non est elementum pellentesque. Nulla in nisi enim. Mauris
                      eget imperdiet quam, non egestas ex. Phasellus odio est,
                      viverra nec mi auctor, hendrerit mattis ipsum.
                    </div>
                    <div class="menu-button-ofrecemos">
                      <div class="menu-button-ofrecemos-child"></div>
                      <a href="www.google.com">
                        <div class="link-ofrecemos"></div>
                      </a>
                      <a href="www.google.com">
                        <b class="conocer-mas-ofrecemos">Conocer más</b>
                      </a>
                    </div>
                  </div>
                </section>
                <section>
                  <div class="group-child-ofrecemos">
                    <img
                      class="group-item-ofrecemos"
                      alt=""
                      src="https://quadtricssolutions.com/NewHtml/img/bus.png"
                    />
                    <b class="title-text-ofrecemos">Atracciones</b>
                    <div class="descripcion-ofrecemos">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vehicula rhoncus enim at volutpat. Vivamus vitae nunc
                      non est elementum pellentesque. Nulla in nisi enim. Mauris
                      eget imperdiet quam, non egestas ex. Phasellus odio est,
                      viverra nec mi auctor, hendrerit mattis ipsum.
                    </div>
                    <div class="menu-button-ofrecemos">
                      <div class="menu-button-ofrecemos-child"></div>
                      <a href="www.google.com">
                        <div class="link-ofrecemos"></div>
                      </a>
                      <a href="www.google.com">
                        <b class="conocer-mas-ofrecemos">Conocer más</b>
                      </a>
                    </div>
                  </div>
                </section>

                <section>
                  <div class="group-child-ofrecemos">
                    <img
                      class="group-item-ofrecemos"
                      alt=""
                      src="https://quadtricssolutions.com/NewHtml/img/bus.png"
                    />
                    <b class="title-text-ofrecemos">Turitour</b>
                    <div class="descripcion-ofrecemos">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vehicula rhoncus enim at volutpat. Vivamus vitae nunc
                      non est elementum pellentesque. Nulla in nisi enim. Mauris
                      eget imperdiet quam, non egestas ex. Phasellus odio est,
                      viverra nec mi auctor, hendrerit mattis ipsum.
                    </div>
                    <div class="menu-button-ofrecemos">
                      <div class="menu-button-ofrecemos-child"></div>
                      <a href="www.google.com">
                        <div class="link-ofrecemos"></div>
                      </a>
                      <a href="www.google.com">
                        <b class="conocer-mas-ofrecemos">Conocer más</b>
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
      {isEditable ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </div>
  );
};

export default Ofrecemos;
