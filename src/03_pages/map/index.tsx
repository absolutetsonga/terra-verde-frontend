"use client";

import { useAppSelector, useAppDispatch } from "@/src/07_shared/store/store";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

import { PopulateMarkers } from "@/src/06_entities/populate-markers/ui";

export const MapPage = () => {
  const trees = useAppSelector((state) => state.trees.trees);
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
          <PopulateMarkers points={trees} />
        </Map>
      </div>
    </APIProvider>
  );
};
