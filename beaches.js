/* oceansafety.info — beach registry
   Single source of truth for the Home search and the Beaches page.
   To add a beach: create its HTML page, then add one line here.
   Fields: name · file · short (used in 'Known Hazards at ___') · type · county · buoy
   Keep `short` under about 14 characters so the hazards heading holds one line.

   Two pages are tidal, not swell: Crissy Field and Aquatic Park read tidal
   current from NOAA CO-OPS station SFB1203, so they carry buoy:'SFB1203'.
   They have no swell period or wave height, and they show no period reading
   in the beach list.
*/

const BEACHES = [
  { name:'Thornton State Beach', file:'thornton-beach.html',     short:'Thornton',        type:'Daly City · Bluffs',               county:'San Mateo County',     buoy:'46012' },
  { name:'Mussel Rock',          file:'mussel-rock.html',        short:'Mussel Rock',     type:'Daly City · Rock Shelf',           county:'San Mateo County',     buoy:'46012' },
  { name:'Rockaway Beach',       file:'rockaway-beach.html',     short:'Rockaway',        type:'Pacifica · Sandy',                 county:'San Mateo County',     buoy:'46012' },
  { name:'Linda Mar',            file:'linda-mar.html',          short:'Linda Mar',       type:'Pacifica · Sandy',                 county:'San Mateo County',     buoy:'46012' },
  { name:'Gray Whale Cove',      file:'gray-whale-cove.html',    short:'Gray Whale Cove', type:'Montara · Cove',                   county:'San Mateo County',     buoy:'46012' },
  { name:'Montara State Beach',  file:'montara-beach.html',      short:'Montara',         type:'Montara · Sandy',                  county:'San Mateo County',     buoy:'46012' },
  { name:'Francis Beach',        file:'francis-beach.html',      short:'Francis',         type:'Half Moon Bay · Sandy',            county:'San Mateo County',     buoy:'46012' },
  { name:'Cowell Ranch',         file:'cowell-ranch.html',       short:'Cowell Ranch',    type:'Half Moon Bay · Remote',           county:'San Mateo County',     buoy:'46012' },
  { name:'Pomponio Beach',       file:'pomponio-beach.html',     short:'Pomponio',        type:'San Gregorio · Sandy',             county:'San Mateo County',     buoy:'46012' },
  { name:'San Gregorio',         file:'san-gregorio-beach.html', short:'San Gregorio',    type:'San Gregorio · Sandy',             county:'San Mateo County',     buoy:'46012' },
  { name:'Pescadero Beach',      file:'pescadero-beach.html',    short:'Pescadero',       type:'Pescadero · Sandy/Rocky',          county:'San Mateo County',     buoy:'46012' },
  { name:'Bean Hollow',          file:'bean-hollow-beach.html',  short:'Bean Hollow',     type:'Pescadero · Tide Pools',           county:'San Mateo County',     buoy:'46012' },
  { name:'Pigeon Point',         file:'pigeon-point.html',       short:'Pigeon Point',    type:'Pescadero · Headland',             county:'San Mateo County',     buoy:'46012' },
  { name:'Año Nuevo',            file:'ano-nuevo.html',          short:'Año Nuevo',       type:'Año Nuevo · Reserve',              county:'San Mateo County',     buoy:'46012' },

  { name:'Ocean Beach',          file:'ocean-beach-sf.html',     short:'Ocean Beach',     type:'Outer Sunset · Open Coast',        county:'San Francisco County', buoy:'46026' },
  { name:'China Beach',          file:'china-beach-sf.html',     short:'China Beach',     type:'Sea Cliff · Cove',                 county:'San Francisco County', buoy:'46026' },
  { name:'Baker Beach',          file:'baker-beach-sf.html',     short:'Baker Beach',     type:'Presidio · Sandy',                 county:'San Francisco County', buoy:'46026' },
  { name:'Crissy Field',         file:'crissy-field-sf.html',    short:'Crissy Field',    type:'Presidio · Bay · Currents',        county:'San Francisco County', buoy:'SFB1203' },
  { name:'Aquatic Park',         file:'aquatic-park-sf.html',    short:'Aquatic Park',    type:"Fisherman's Wharf · Cove",         county:'San Francisco County', buoy:'SFB1203' },

  { name:'Stinson Beach',        file:'stinson-beach.html',      short:'Stinson',         type:'Stinson · Sandy · Rip Currents',   county:'Marin County',         buoy:'46026' },
  { name:'Muir Beach',           file:'muir-beach.html',         short:'Muir Beach',      type:'Marin Headlands · Cove',           county:'Marin County',         buoy:'46026' },
  { name:'Point Reyes Beach',    file:'point-reyes-beach.html',  short:'Point Reyes',     type:'Point Reyes · Exposed · Remote',   county:'Marin County',         buoy:'46013' },

  { name:'Bodega Bay',           file:'bodega-bay.html',         short:'Bodega Bay',      type:'Bodega · Bay and Ocean',           county:'Sonoma County',        buoy:'46013' },
  { name:'Salmon Creek Beach',   file:'salmon-creek-beach.html', short:'Salmon Creek',    type:'Bodega · Sandy · Creek Mouth',     county:'Sonoma County',        buoy:'46013' },
  { name:'Goat Rock Beach',      file:'goat-rock-beach.html',    short:'Goat Rock',       type:'Jenner · Rocky · River Mouth',     county:'Sonoma County',        buoy:'46013' }
];

const COUNTY_ORDER = ['San Mateo County', 'San Francisco County', 'Marin County', 'Sonoma County'];

const COUNTY_META = {
  'San Mateo County':     'Daly City → Año Nuevo · Buoy 46012',
  'San Francisco County': 'Ocean Beach → Aquatic Park · Buoy 46026',
  'Marin County':         'Stinson → Point Reyes · Buoys 46026 · 46013',
  'Sonoma County':        'Bodega Bay → Jenner · Buoy 46013'
};
