
export interface PlatformOption {
  value: string;
  label: string;
  tauxConversion: number;
  revenuMoyen: number;
}

export interface FrequencyOption {
  value: string;
  label: string;
  multiplicateur: number;
}

export interface SimulationResult {
  revenuMensuel: number;
  revenuAnnuel: number;
  audienceRequisePourCible: number;
}
