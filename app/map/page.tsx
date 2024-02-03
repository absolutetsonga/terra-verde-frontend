"use client";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useState } from "react";

const Page = () => {
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
          <AdvancedMarker
            position={position}
            onClick={() => setToggleWindow(true)}
          >
            <Pin
              background={"green"}
              borderColor={"green"}
              glyphColor={"black"}
            />

            {toggleWindow && (
              <InfoWindow
                position={position}
                onCloseClick={() => setToggleWindow(false)}
              >I am modal window</InfoWindow>
            )}
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
};

export default Page;
