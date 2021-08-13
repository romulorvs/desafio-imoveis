export interface IPagination {
  value: number
  onChange: (value: number) => void
  totalPages: number
}
