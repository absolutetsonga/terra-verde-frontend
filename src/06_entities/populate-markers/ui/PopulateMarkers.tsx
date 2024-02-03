import { AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";
import { setSelectedTreeKey } from "@/src/07_shared/features/trees/treesSlice";
import { useAppDispatch, useAppSelector } from "@/src/07_shared/store/store";

import type { Marker } from "@googlemaps/markerclusterer";

import { useState } from "react";
import { useRenderCustomClusterIcon } from "../lib/hooks/useRenderCustomClusterIcon";

type Point = google.maps.LatLngLiteral & { key: string };
type Props = { points: Point[] };

const PopulateMarkers = ({ points }: Props) => {
  const dispatch = useAppDispatch();
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});

  useRenderCustomClusterIcon(markers);

  const selectedTreeKey = useAppSelector(
    (state) => state.trees.selectedTreeKey
  );

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
    <div key={point.key}>
      <AdvancedMarker
        position={point}
        onClick={() => dispatch(setSelectedTreeKey(point.key))}
        ref={(marker) => setMarkerRef(marker, point.key)}
      >
        <span style={{ fontSize: "1rem" }}>🌳</span>
      </AdvancedMarker>

      {selectedTreeKey === point.key && (
        <InfoWindow position={point}>You can drag and drop me.</InfoWindow>
      )}
    </div>
  ));
};

export default PopulateMarkers;
