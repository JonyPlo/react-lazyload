import { lazy, LazyExoticComponent } from 'react'

type JSXComponent = () => JSX.Element

interface Route {
  to: string
  path: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
}

// Usando el metodo lazy de react, podemos indicar que componentes cargaran de manera perezosa, en este caso estamos indicando que el componente que esta en la ruta '../01-lazyload/pages/LazyPage1' queremos que cargue de manera lazy
// Tener en cuenta que para que el import dentro del lazy funcione y no de error, el componente que se trae, debe estar exportado por defecto, es decir de esta manera 'export default LazyPage1'
const Lazy1 = lazy(
  // Agregando el comentario "/* webpackChunkName: "LazyPage1" */" dentro del import, estamos renombrando el chunk del componente que se muestra en la pestaña de Network en el inspector de elementos del navegador para que podamos saber bien cual es el chunk o el componente que se acaba de cargar. Generalmente esto se suele hacer para que despues podamos ver  porque un chunk o un componente pesa tanto
  () =>
    import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1')
)
const Lazy2 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2')
)
const Lazy3 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3')
)

export const routes: Route[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    Component: Lazy1,
    name: 'Lazy-1',
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    Component: Lazy2,
    name: 'Lazy-2',
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: Lazy3,
    name: 'Lazy-3',
  },
]
