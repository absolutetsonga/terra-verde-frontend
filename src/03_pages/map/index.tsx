"use client";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  useMap,
} from "@vis.gl/react-google-maps";

import type {
  Marker,
  MarkerClusterer as IMarcerClusterer,
  Cluster,
  ClusterStats,
} from "@googlemaps/markerclusterer";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { useState, useRef, useEffect } from "react";
import { trees } from "@/src/07_shared/data";

const customClusterIconRenderer = (cluster: Cluster, stats: ClusterStats) => {
  const count = cluster.count;

  let iconWidth: number = 40; // Default size
  let iconHeight: number = 40;
  let iconUrl: string;
  // Create a marker with a default icon
  const marker = new google.maps.Marker({
    position: cluster.position,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 10,
      fillColor: "#FFFFFF",
      fillOpacity: 0.6,
      strokeWeight: 0.4,
    },
  });

  // Load the custom icon asynchronously
  const image = new Image();

  if (count < 40) {
    iconUrl = "1.svg"; // Replace with your icon paths
    iconWidth = 25;
    iconHeight = 25;
  } else if (count < 100) {
    iconUrl = "2.svg";
    iconWidth = 30;
    iconHeight = 30;
  } else {
    iconUrl = "3.svg";
    iconWidth = 40;
    iconHeight = 40;
  }

  image.src = iconUrl;

  image.onload = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = iconWidth;
    canvas.height = iconHeight;

    if (context) {
      context.fillStyle = "green";
      context.arc(iconWidth / 2, iconHeight / 2, iconWidth / 2, 0, 2 * Math.PI);
      context.fill();

      context.drawImage(image, 0, 0, iconWidth, iconHeight);
      context.font = "bold 16px Arial";
      context.fillStyle = "black";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(count.toString(), iconWidth / 2, iconHeight / 2);

      // Update the marker's icon
      marker.setIcon({
        url: canvas.toDataURL(),
        scaledSize: new google.maps.Size(iconWidth, iconHeight),
      });
    }
  };

  return marker;
};

export const MapPage = () => {
  const [toggleWindow, setToggleWindow] = useState<boolean>(false);

  const position = { lat: 51.169392, lng: 71.449074 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}>
      <div
        style={{
          height: "100vh",
        }}
      >
        <Map
          center={position}
          zoom={10}
          mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_CUSTOM_STYLE_ID}
        >
          <Markers points={trees} />
        </Map>
      </div>
    </APIProvider>
  );
};

type Point = google.maps.LatLngLiteral & { key: string };
type Props = { points: Point[] };

const Markers = ({ points }: Props) => {
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

  return (
    <>
      {points.map((point) => (
        <AdvancedMarker
          position={point}
          key={point.key}
          ref={(marker) => setMarkerRef(marker, point.key)}
        >
          <span style={{ fontSize: "1rem" }}>🌳</span>
        </AdvancedMarker>
      ))}
    </>
  );
};
