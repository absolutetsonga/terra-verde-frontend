import { setSelectedTreeKey } from "@/src/07_shared/lib/features/trees/treesSlice";

import {
  useAppDispatch,
  useAppSelector,
} from "@/src/07_shared/lib/store/store";
import { useState } from "react";
import { useRenderCustomClusterIcon } from "../lib/hooks/useRenderCustomClusterIcon";

import { AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";
import { TreeInfo } from "../../../06_entities/tree-info/ui";

import type { Marker } from "@googlemaps/markerclusterer";

type Point = google.maps.LatLngLiteral & { key: string; name: string };
type Props = { points: Point[] };

const PopulateMarkers = ({ points }: Props) => {
  const dispatch = useAppDispatch();

  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
  useRenderCustomClusterIcon(markers);

  const handleClick = (point: Point) => {
    dispatch(setSelectedTreeKey(point.key));
  };

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
        onClick={() => handleClick(point)}
        ref={(marker) => setMarkerRef(marker, point.key)}
        className="tree-marker"
      >
        <span style={{ fontSize: "1rem" }}>🌳</span>
      </AdvancedMarker>

      {selectedTreeKey === point.key && (
        <InfoWindow
          position={point}
          onCloseClick={() => dispatch(setSelectedTreeKey(null))}
        >
          <TreeInfo point={point} />
        </InfoWindow>
      )}
    </div>
  ));
};

export default PopulateMarkers;
