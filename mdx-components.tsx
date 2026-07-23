import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'
import {
  Banner,
  Bleed,
  Button,
  Callout,
  Cards,
  Collapse,
  FileTree,
  ImageZoom,
  Playground,
  Popup,
  Search,
  Select,
  Steps,
  Table,
  Tabs,
} from 'nextra/components'

const themeComponents = getThemeComponents()

export function useMDXComponents(components = {}) {
  return {
    ...themeComponents,

    Banner,
    Bleed,
    Button,
    Callout,
    Cards,
    Collapse,
    FileTree,
    ImageZoom,
    Playground,
    Popup,
    Search,
    Select,
    Steps,
    Table,
    Tabs,

    ...components,
  }
}