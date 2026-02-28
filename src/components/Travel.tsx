import { useEffect, useMemo, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { COUNTRIES, type Country } from "../data/countries";
import * as Flags from 'country-flag-icons/react/3x2';

const VISITED_CODES = new Set(COUNTRIES.map((c) => c.code));

export default function Travel() {
  const [geoJson, setGeoJson] = useState<GeoJSON.FeatureCollection | null>(
    null,
  );
  const [hoveredCountry, setHoveredCountry] = useState<Country | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.pointOfView({ altitude: 1.8 });
      const controls = globeRef.current.controls();
      if (controls) {
        controls.enableZoom = false; // Disable zooming
        controls.enablePan = false; // Ensure it stays centered
        controls.minDistance = 180;
        controls.maxDistance = 500;
      }
    }
  }, [dimensions]);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson",
    )
      .then((res) => res.json())
      .then((data) => {
        setGeoJson(data);
      })
      .catch((err) => console.error("Failed to load GeoJSON:", err));
  }, []);

  const polygonsWithHighlight = useMemo(() => {
    if (!geoJson?.features) return [];
    return geoJson.features.map((feature) => {
      const props = feature.properties;
      const iso2 = props?.ISO_A2 === "-99" ? props?.WB_A2 : props?.ISO_A2;
      const iso3 = props?.ISO_A3 === "-99" ? props?.WB_A3 : props?.ISO_A3;
      const isVisited =
        (iso2 && VISITED_CODES.has(iso2)) || (iso3 && VISITED_CODES.has(iso3));
      return { ...feature, properties: { ...props, _isVisited: isVisited } };
    });
  }, [geoJson]);

  return (
    <section className="relative py-32 bg-bg overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(32,213,179,0.05)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-xs text-accent tracking-[0.2em] uppercase mb-4">
            Adventures
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-text tracking-tight">
            Countries Explored
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            {COUNTRIES.length} countries visited across 4 continents
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative aspect-[16/9] md:aspect-[2/1] max-w-5xl mx-auto flex items-center justify-center"
        >
          {dimensions.width > 0 && (
            <Globe
              ref={globeRef}
              width={dimensions.width}
              height={dimensions.height}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              backgroundImageUrl=""
              backgroundColor="rgba(0,0,0,0)"
              showAtmosphere={true}
              atmosphereColor="#20D5B3"
              atmosphereAltitude={0.08}
              polygonsData={polygonsWithHighlight}
              polygonAltitude={(d: any) => (d.properties?._isVisited ? 0.01 : 0.005)}
              polygonCapColor={(d: any) =>
                d.properties?._isVisited
                  ? "rgba(22, 101, 52, 0.8)"
                  : "transparent"
              }
              polygonSideColor={() => "transparent"}
              polygonStrokeColor={() => "rgba(255, 255, 255, 0.2)"}
              polygonLabel={(feature: any) => {
                const props = feature.properties;
                const code = props?.ISO_A2 === "-99" ? props?.WB_A2 : props?.ISO_A2;
                const country = code
                  ? COUNTRIES.find((c) => c.code === code)
                  : null;
                return country
                  ? `<div><b>${country.name}</b></div>`
                  : props?.ADMIN || "";
              }}
            />
          )}

          {hoveredCountry && (
            <div className="absolute top-4 right-4 bg-bg-card/90 backdrop-blur-xl border border-white/10 rounded-lg px-4 py-3 pointer-events-none">
              <div className="flex items-center gap-3">
                <span className="w-8 inline-block overflow-hidden rounded-[2px]">
                  {(() => {
                    const Flag = Flags[hoveredCountry.code as keyof typeof Flags];
                    return Flag ? <Flag /> : "🏳️";
                  })()}
                </span>
                <div>
                  <p className="text-text font-medium">{hoveredCountry.name}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {COUNTRIES.slice(0, isExpanded ? COUNTRIES.length : 12).map((country) => {
            const Flag = Flags[country.code as keyof typeof Flags];
            return (
              <button
                key={country.name}
                type="button"
                className="flex items-center gap-2 px-3 py-2 bg-white/[0.02] border border-white/5 rounded-md hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 cursor-pointer text-left"
                onMouseEnter={() => setHoveredCountry(country)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                <span className="w-5 inline-block overflow-hidden rounded-[2px] opacity-90">
                  {Flag ? <Flag /> : "🏳️"}
                </span>
                <span className="text-text-muted text-xs truncate">
                  {country.name}
                </span>
              </button>
            );
          })}
          {COUNTRIES.length > 12 && (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-center px-3 py-2 bg-accent/5 border border-accent/20 rounded-md hover:bg-accent/10 transition-colors cursor-pointer"
            >
              <span className="text-accent text-xs font-medium">
                {isExpanded ? "Show less" : `+${COUNTRIES.length - 12} more`}
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
