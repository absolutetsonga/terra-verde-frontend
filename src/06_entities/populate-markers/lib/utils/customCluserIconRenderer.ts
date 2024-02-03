import type { Cluster, ClusterStats } from "@googlemaps/markerclusterer";

const customClusterIconRenderer = (
  cluster: Cluster,
  stats: ClusterStats
) => {
  const count = cluster.count;

  let iconWidth: number = 40;
  let iconHeight: number = 40;
  let iconUrl: string;

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

  const image = new Image();

  if (count < 40) {
    iconUrl = "1.svg";
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

      marker.setIcon({
        url: canvas.toDataURL(),
        scaledSize: new google.maps.Size(iconWidth, iconHeight),
      });
    }
  };

  return marker;
};

export default customClusterIconRenderer