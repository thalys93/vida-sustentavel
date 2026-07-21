export type UrgencyMetric = {
  id: string
  label: string
  unit: string
  perSecond: number
  rateHint: string
}

export type DeforestationPoint = {
  year: number
  km2: number
}

export type UrgencySource = {
  label: string
  url: string
}

export const urgencyMetrics: UrgencyMetric[] = [
  {
    id: "trees",
    label: "Árvores perdidas",
    unit: "árvores",
    perSecond: 0.475,
    rateHint: "~1.700 por hora",
  },
  {
    id: "co2",
    label: "CO₂ emitido",
    unit: "toneladas",
    perSecond: 1170,
    rateHint: "~4,2 milhões t/hora",
  },
  {
    id: "plastic",
    label: "Plástico nos oceanos",
    unit: "kg",
    perSecond: 348,
    rateHint: "~1.250 t/hora",
  },
]

export const amazonDeforestation: DeforestationPoint[] = [
  { year: 2019, km2: 10129 },
  { year: 2020, km2: 10851 },
  { year: 2021, km2: 13035 },
  { year: 2022, km2: 11594 },
  { year: 2023, km2: 9064 },
  { year: 2024, km2: 6288 },
]

export const urgencySources: UrgencySource[] = [
  {
    label: "Estimativas globais de perda florestal (FAO / Global Forest Watch)",
    url: "https://www.globalforestwatch.org/",
  },
  {
    label: "Emissões globais de CO₂ (Global Carbon Project)",
    url: "https://globalcarbonbudget.org/",
  },
  {
    label: "Plástico nos oceanos (ONU Meio Ambiente)",
    url: "https://www.unep.org/",
  },
  {
    label: "Desmatamento Amazônia Legal — PRODES/INPE",
    url: "https://www.obt.inpe.br/OBT/assuntos/programas/amazonia/prodes",
  },
]
