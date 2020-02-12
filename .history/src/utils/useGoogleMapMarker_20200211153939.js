import { useEffect, useState } from "react";

const eventMapping = {
  onClick: "click",
  onDoubleClick: "dblclick"
};

export default function useGoogleMapMarker({
  position,
  maps,
  map,
  title
}) {
  const [marker, setMarker] = useState();
  useEffect(() => {
    // const styles = markerStyle(type);
    const marker = new maps.Marker({
      position,
      map,
      title
	});
	
    setMarker(marker);
  }, []);

  return marker;
}
