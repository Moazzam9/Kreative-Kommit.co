import { baseKeywords } from "../keywords/services";

export interface City {
  name: string;
  slug: string;
  county: string;
  population?: number;
  region?: string;
}

export function getCityDescription(cityName: string): string {
  return `Grow your business in ${cityName} with expert web design, SEO, and digital marketing from Kreative Kommit.`;
}

export function getCityKeyword(cityName: string): string {
  return `${cityName} ${baseKeywords}`;
}

export const walesCities: City[] = [
  { name: "Llanelli", slug: "llanelli", county: "Carmarthenshire" },
  { name: "Carmarthen", slug: "carmarthen", county: "Carmarthenshire" },
  { name: "Ammanford", slug: "ammanford", county: "Carmarthenshire" },
  { name: "Aberystwyth", slug: "aberystwyth", county: "Ceredigion" },
  { name: "Cardigan", slug: "cardigan", county: "Ceredigion" },
  { name: "Lampeter", slug: "lampeter", county: "Ceredigion" },
  { name: "Rhyl", slug: "rhyl", county: "Denbighshire" },
  { name: "Denbigh", slug: "denbigh", county: "Denbighshire" },
  { name: "Prestatyn", slug: "prestatyn", county: "Denbighshire" },
  { name: "Barry", slug: "barry-wales", county: "Vale of Glamorgan" },
  { name: "Penarth", slug: "penarth", county: "Vale of Glamorgan" },
  { name: "Cowbridge", slug: "cowbridge", county: "Vale of Glamorgan" },
  { name: "Cwmbran", slug: "cwmbran", county: "Torfaen" },
  { name: "Pontypool", slug: "pontypool", county: "Torfaen" },
  { name: "Pontypridd", slug: "pontypridd", county: "Rhondda Cynon Taf" },
  { name: "Aberdare", slug: "aberdare", county: "Rhondda Cynon Taf" },
  { name: "Treorchy", slug: "treorchy", county: "Rhondda Cynon Taf" },
  { name: "Neath", slug: "neath", county: "Neath Port Talbot" },
  { name: "Port Talbot", slug: "port-talbot", county: "Neath Port Talbot" },
  { name: "Briton Ferry", slug: "briton-ferry", county: "Neath Port Talbot" },
  { name: "Ebbw Vale", slug: "ebbw-vale", county: "Blaenau Gwent" },
  { name: "Abertillery", slug: "abertillery", county: "Blaenau Gwent" },
  { name: "Tredegar", slug: "tredegar", county: "Blaenau Gwent" },
  { name: "Abergavenny", slug: "abergavenny", county: "Monmouthshire" },
  { name: "Monmouth", slug: "monmouth", county: "Monmouthshire" },
  { name: "Chepstow", slug: "chepstow", county: "Monmouthshire" },
  { name: "Brecon", slug: "brecon", county: "Powys" },
  { name: "Newtown", slug: "newtown", county: "Powys" },
  { name: "Welshpool", slug: "welshpool", county: "Powys" },
  { name: "Llandudno", slug: "llandudno", county: "Conwy" },
  { name: "Colwyn Bay", slug: "colwyn-bay", county: "Conwy" },
  { name: "Conwy", slug: "conwy", county: "Conwy" },
  { name: "Holyhead", slug: "holyhead", county: "Isle of Anglesey" },
  { name: "Llangefni", slug: "llangefni", county: "Isle of Anglesey" },
  { name: "Amlwch", slug: "amlwch", county: "Isle of Anglesey" },
  { name: "Wrexham", slug: "wrexham", county: "Wrexham" },
  { name: "Ruabon", slug: "ruabon", county: "Wrexham" },
  { name: "Chirk", slug: "chirk", county: "Wrexham" },
  { name: "Swansea", slug: "swansea", county: "Swansea" },
  { name: "Gorseinon", slug: "gorseinon", county: "Swansea" },
  { name: "Morriston", slug: "morriston", county: "Swansea" },
  { name: "Cardiff", slug: "cardiff", county: "Cardiff" },
  { name: "Penarth", slug: "penarth-cardiff", county: "Cardiff" },
  { name: "Caerphilly", slug: "caerphilly", county: "Caerphilly" },
  { name: "Ystrad Mynach", slug: "ystrad-mynach", county: "Caerphilly" },
  { name: "Bargoed", slug: "bargoed", county: "Caerphilly" }
];

// ...existing code...
