import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface LeafletMapProps {
  className?: string;
}

export const LeafletMap: React.FC<LeafletMapProps> = ({ className = "" }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Cleanup any existing instance before initializing
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

    // Initialize Leaflet map centered at Kolkata, West Bengal, India
    const map = L.map(mapContainerRef.current, {
      center: [22.5726, 88.3639],
      zoom: 12,
      scrollWheelZoom: false, // Prevent page scroll hijack
      dragging: !isMobile, // Prevent single-finger scroll trap on mobile devices
      touchZoom: true,
      zoomControl: false, // Custom position added below
      attributionControl: true,
    });

    mapInstanceRef.current = map;

    const MAPTILER_KEY =
      import.meta.env.VITE_MAPTILER_API_KEY || "dYabcyQdKlP5efG04Sni";

    // MapTiler Retina Dark Tiles
    L.tileLayer(
      `https://api.maptiler.com/maps/streets-v2-dark/256/{z}/{x}/{y}@2x.png?key=${MAPTILER_KEY}`,
      {
        attribution:
          '&copy; <a href="https://www.maptiler.com/copyright/" target="_blank" rel="noreferrer">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>',
        tileSize: 256,
        maxZoom: 19,
      }
    ).addTo(map);

    // Zoom control at bottom right
    L.control.zoom({ position: "bottomright" }).addTo(map);

    // Custom pulsing beacon marker for Kolkata
    const markerIcon = L.divIcon({
      className: "custom-leaflet-marker",
      html: `
        <div style="position: relative; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center;">
          <span style="position: absolute; width: 28px; height: 28px; border-radius: 9999px; background-color: rgba(255, 255, 255, 0.25); animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></span>
          <span style="position: relative; width: 12px; height: 12px; border-radius: 9999px; background-color: #ffffff; box-shadow: 0 0 14px rgba(255, 255, 255, 0.9); border: 2px solid #0d0e10;"></span>
        </div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
    });

    const marker = L.marker([22.5726, 88.3639], { icon: markerIcon }).addTo(map);

    marker.bindPopup(
      `<div style="font-family: Inter, sans-serif; padding: 2px;">
        <div style="color: #ffffff; font-weight: 600; font-size: 13px; letter-spacing: -0.01em;">Kolkata, India</div>
        <div style="color: #9ca3af; font-size: 11px; font-family: monospace; margin-top: 3px;">22.5726° N, 88.3639° E · UTC+5:30</div>
      </div>`,
      { className: "custom-leaflet-popup" }
    );

    // Ensure map tiles resize correctly after mounting
    const timeout = setTimeout(() => {
      map.invalidateSize();
    }, 200);

    return () => {
      clearTimeout(timeout);
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div className={`relative w-full rounded-xl overflow-hidden border border-white/[0.08] bg-[#121315] shadow-md ${className}`}>
      {/* Map container */}
      <div ref={mapContainerRef} className="w-full h-full min-h-[200px] sm:min-h-[280px] z-0" />

      {/* Top Floating Glass Badge */}
      <div className="absolute top-3 left-3 z-[400] pointer-events-none">
        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-md bg-[#0d0e11]/85 backdrop-blur-md border border-white/10 text-[11px] sm:text-xs font-mono shadow-sm max-w-[calc(100%-24px)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
          <span className="text-neutral-200 font-medium shrink-0">KOLKATA, IN</span>
          <span className="text-white/20">|</span>
          <span className="text-[10px] sm:text-[11px] text-neutral-400 truncate">22.57° N, 88.36° E</span>
        </div>
      </div>
    </div>
  );
};
