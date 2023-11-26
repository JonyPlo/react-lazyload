import { lazy, LazyExoticComponent } from 'react'
import { NoLazy } from '../01-lazyload/pages/NoLazy'

type JSXComponent = () => JSX.Element

interface Route {
  to: string
  path: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
}

// Usando el metodo lazy de react, podemos indicar que componentes cargaran de manera perezosa, en este caso estamos indicando que el componente que esta en la ruta '../01-lazyload/pages/LazyPage1' queremos que cargue de manera lazy
// Tener en cuenta que para que el import dentro del lazy funcione y no de error, el componente que se trae, debe estar exportado por defecto, es decir de esta manera 'export default LazyPage1'
const LazyLayout = lazy(
  // Agregando el comentario "/* webpackChunkName: "LazyPage1" */" dentro del import, estamos renombrando el chunk del componente que se muestra en la pestaña de Network en el inspector de elementos del navegador para que podamos saber bien cual es el chunk o el componente que se acaba de cargar. Generalmente esto se suele hacer para que despues podamos ver  porque un chunk o un componente pesa tanto
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'
    )
)

export const routes: Route[] = [
  {
    to: '/lazyload',
    path: 'lazyload/*',
    Component: LazyLayout,
    name: 'Lazy Layout',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy',
  },
]
