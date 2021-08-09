export interface IOptions {
  value: string
  list: Array<{
    id: string
    label: string
  }>
  labelText: string
  hideLabel?: boolean
  onChange: (id: any) => void
}
