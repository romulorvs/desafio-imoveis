export interface ISelectBar {
  value: string
  list: Array<{
    id: string
    label: string
  }>
  onChange: (id: any) => void
}
