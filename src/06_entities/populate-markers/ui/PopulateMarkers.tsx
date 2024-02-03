import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { AdvancedMarker, useMap } from "@vis.gl/react-google-maps";
import { customClusterIconRenderer } from "../lib/utils";

import type {
  Marker,
  MarkerClusterer as IMarcerClusterer,
} from "@googlemaps/markerclusterer";

import { useState, useRef, useEffect } from "react";

type Point = google.maps.LatLngLiteral & { key: string };
type Props = { points: Point[] };

const PopulateMarkers = ({ points }: Props) => {
  const map = useMap();

  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
  const clusterer = useRef<IMarcerClusterer | null>(null);

  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({
        map,
        renderer: {
          render: customClusterIconRenderer,
        },
      });
    }
  }, [map]);

  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  return points.map((point) => (
    <AdvancedMarker
      position={point}
      key={point.key}
      ref={(marker) => setMarkerRef(marker, point.key)}
    >
      <span style={{ fontSize: "1rem" }}>🌳</span>
    </AdvancedMarker>
  ));
};

export default PopulateMarkers;
