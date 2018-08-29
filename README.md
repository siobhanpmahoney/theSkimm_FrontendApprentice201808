# States and Countries: theSkimm Frontend Apprentice 2018 Coding Exercise

The app a list of states and countries at endpoints /states and /countries, respectively.


## Routes Overview

Routes are defined for the Home page (`/`), states (`/states`), and countries (`/countries`). Using react-router's `Redirect`, the user will be redirected to the Home page if the path entered does not match any of the above defined routes.

The `/states` and `/countries` routes are passed 2 props: the function defined in the respective files within the `/api` directory that fetch the respective list (`fetchFunction`), and a string that will be rendered as a page title.

## Component Architecture and Flow Overview

States and country lists are rendered with the same container component (`Container`) and presentational components, `List` and `Item`.

When either endpoint is accessed via the NavBar links, the respective list is fetched with the `fetchFunction()` prop and stored within  `Container`'s `items` state. The `items` state is passed to the `List` presentational component, which maps over the array, passing each item to the `Item` presentational component, which renders the item.


When a user toggles between the state and country endpoints, the information displayed on the page updates via the `componentDidMount()` lifecycle method, which compares the current and previous route location and clears and resets `Container`'s `items` state. The comparison of route locations is accomplished by wrapping the `Container` component in react-router's `withRouter` higher order component, providing the component with access to the `location` prop.


## Additional Notes and Considerations
