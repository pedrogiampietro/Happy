import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import mapMarkerImg from '../imgs/map-mark.svg'
import mapIcon from '../Utils/mapIcons'
import api from '../services/api'

import '../styles/pages/orphanages-map.css'

interface Orphanage {
	id: number
	latitude: number
	longitude: number
	name: string
}

const OrphanagesMap = () => {
	const [orphanages, setOrphanages] = React.useState<Orphanage[]>([])

	React.useEffect(() => {
		api.get('orphanages').then((response) => {
			setOrphanages(response.data)
		})
	}, [])

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

				{orphanages.map((orphanage) => {
					return (
						<Marker
							key={orphanage.id}
							icon={mapIcon}
							position={[orphanage.latitude, orphanage.longitude]}
						>
							<Popup
								closeButton={false}
								minWidth={240}
								maxWidth={240}
								className="map-popup"
							>
								{orphanage.name}
								<Link to={`/orphanages/${orphanage.id}`}>
									<FiArrowRight size={20} color="#FFF" />
								</Link>
							</Popup>
						</Marker>
					)
				})}
			</Map>
			<Link to="/orphanages/create" className="create-orphanage">
				<FiPlus size={32} color="#FFF" />
			</Link>
		</div>
	)
}

export default OrphanagesMap
