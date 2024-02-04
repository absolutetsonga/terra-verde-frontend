import { useMap } from "@vis.gl/react-google-maps";
import { useEffect, useRef } from "react";

import type {
  MarkerClusterer as IMarcerClusterer,
  Marker,
} from "@googlemaps/markerclusterer";

import { MarkerClusterer } from "@googlemaps/markerclusterer";

import { customClusterIconRenderer } from "../utils";

export const useRenderCustomClusterIcon = (markers: {
  [key: string]: Marker;
}) => {
  const map = useMap();
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
};
