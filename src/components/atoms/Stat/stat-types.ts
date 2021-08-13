export interface IStat {
  type: 'BATHROOMS' | 'BEDROOMS' | 'AREA' | 'PARKING_SPACES'
  value: string | number
  size?: 'small' | 'normal'
}
