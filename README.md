# States and Countries: theSkimm Frontend Apprentice 2018 Coding Exercise

The States and Countries app lists states and countries at endpoints `/states` and `/countries`, respectively.


## Routes Overview

Routes are defined for the Home page (`/`), states (`/states`), and countries (`/countries`). Using react-router's `Redirect`, the user will be redirected to the Home page if the path entered does not match any of the above defined routes.

The `/states` and `/countries` routes are passed 2 props: the function defined in the respective file within the `/api` directory that fetches the list of entities (`fetchFunction()`), and a string that will be rendered as a page title.

## Component Architecture and Flow Overview

States and country lists are rendered with the same container component (`Container`) and presentational components, `List` and `Item`.

When either endpoint is accessed via the NavBar links, the respective list is fetched with the `fetchFunction()` prop and stored within  `Container`'s `items` state. The `items` state is passed to the `List` presentational component, which maps over the array, passing each item to the `Item` presentational component, which renders the item.


When a user toggles between the state and country endpoints, the information displayed on the page updates via the `componentDidUpdate()` lifecycle method, which compares the current and previous route location and clears and resets `Container`'s `items` state. The comparison of route locations is accomplished by wrapping the `Container` component in react-router's `withRouter` higher order component, providing the component with access to the route location via the `location` prop.


## Styles

When possible, I utilized pre-existing styles that fit the requirements of the style guidelines. I also defined new styles for the list container and the list items in `/styles/_features.scss`. Additionally, I added a style to `_typography.scss` for the headers on the feature pages.

## Additional Notes and Considerations

**Reuse of `Container` Component**: I reused the `Container` component since the State and Country lists are both stored as an array of strings, rendered with the same styles, and don't have any functionality aside from being displayed. However, if the datasets  were to differ in type, or if more complex functionality was added to each displayed item, I would rethink this solution.
