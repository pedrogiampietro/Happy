import React from 'react'

import mapMarkerImg from '../imgs/map-mark.svg'

const OrphanagesMap = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy Map Mark" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas criancas estao esperando a sua visita =)</p>
        </header>

        <footer>
          <strong>Rio de Janeiro</strong>
          <span>Ilha do Governador</span>
        </footer>
      </aside>

      <div></div>
    </div>
  )
}

export default OrphanagesMap
