'use client'

import { Loader } from "@googlemaps/js-api-loader";
import React, {useEffect} from "react"

export function Map() {

    const mapRef = React.useRef(null);

    useEffect(() => {
        const initMap = async () => {
            
            const loader = new Loader({
                apiKey: import.meta.env.VITE_PUBLIC_API_KEY as string,
                version: 'weekly'
            });

            const { Map } = await loader.importLibrary('maps');
            
            const position = {
                lat: 41.59225,
                lng: -93.605060
            }

            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 17,
                mapId: 'map-food-desert'
            }

            new Map(mapRef.current as unknown as HTMLDivElement, mapOptions)
        }

        initMap()
    }, []);
    return (
        <div className="w-10/12 place-content-center items-center ">
            <div style={{height: '200px', width: '300px'}} ref={mapRef} className="place-content-center rounded-xl my-4"></div>
        </div>
        
    )
}