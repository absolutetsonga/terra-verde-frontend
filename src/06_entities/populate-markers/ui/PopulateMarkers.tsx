import { setSelectedTreeKey } from "@/src/07_shared/features/trees/treesSlice";

import { useAppDispatch, useAppSelector } from "@/src/07_shared/store/store";
import { useState } from "react";
import { useRenderCustomClusterIcon } from "../lib/hooks/useRenderCustomClusterIcon";

import { AdvancedMarker, InfoWindow, useMap } from "@vis.gl/react-google-maps";
import type { Marker } from "@googlemaps/markerclusterer";

type Point = google.maps.LatLngLiteral & { key: string };
type Props = { points: Point[] };

const PopulateMarkers = ({ points }: Props) => {
  const dispatch = useAppDispatch();

  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});

  const handleClick = (point: Point) => {
    dispatch(setSelectedTreeKey(point.key));
  };

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
          <div className="info-window">
            <h3 className="info-title">Tree Info</h3>
            <div className="info-content">
              <h2>Place Name</h2>
              <p className="info-description">
                Brief description of the place or any interesting details that
                visitors might want to know.
              </p>
              <hr className="info-hr" />
              <p className="info-detail">
                <strong>Address:</strong> Street Name, City, Country
              </p>
              <p className="info-detail">
                <strong>Phone:</strong> +123 456 7890
              </p>
              <p className="info-detail">
                <strong>Website:</strong>{" "}
                <a
                  href="http://www.example.com"
                  target="_blank"
                  className="info-link"
                >
                  www.example.com
                </a>
              </p>
              <form className="info-form" style={{ marginBottom: "16px" }}>
                <label htmlFor="file_input" className="info-label">
                  Upload image
                </label>
                <p id="file_input_help" className="info-help-text">
                  SVG, PNG, JPG or GIF (MAX. 800x600px).
                </p>
                <input id="file_input" type="file" className="info-input" />
              </form>
              <div style={{ marginTop: "16px" }}>
                <button className="info-button">Submit</button>
              </div>
            </div>
          </div>
        </InfoWindow>
      )}
    </div>
  ));
};

export default PopulateMarkers;
