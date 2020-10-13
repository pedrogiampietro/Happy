import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../imgs/map-mark.svg'

import '../styles/pages/orphanages-map.css'

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

			<Map
				center={[-22.8116365, -43.2037672]}
				zoom={15}
				style={{ width: '100%', height: '100%' }}
			>
				<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?acess_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`} /> */}

			</Map>
			<Link to="" className="create-orphanage">
				<FiPlus size={32} color="#FFF" />
			</Link>
		</div>
	)
}

export default OrphanagesMap
