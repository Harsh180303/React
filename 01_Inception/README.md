## Started learning React...

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimazation
- Minification of file
- Bundling the file
- Compressing the file
- Consistent Hashing
- Code Splitting
- Differential Bunbling - support older browsers
- Diagnostic (beautiful higlighted code frame)
- Error Handling (Better error suggestions)
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles


# Website Structure

Header
- Logo
- Nav Items

Body
- Search
- RestaurantContainer
- ResturantCard
    - Img
    - Name of res, Start rating, Cuisine, dilevery time

Footer
- Copyright
- Links
- Address
- Contact


# Export/Import

There are two type of Export/Import

- Default Export/Import

    export default <name_of_component>;
    import <name_of_component> from "path";

- Named Export/Import

    export const <var_name> = "name";
    import { <var_name> } from "path";


# React Hooks
    (Normal JS utility functions)
-   useState() - Superpowerful State Variables in react
-   useEffect()


# Types of Routing in web Apps
- Client Side Routing
- Server Side Routing


# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connectt our store to our app
- Slice (cartSlice)
- dispatch (action)
- Selector



# Where I have to make change if the API got changed in near future
- RestaurantMenu.js 
- Body.js


# Types of Testing (Developer)
 - Unit Testing
 - Integration Testing
 - End to End Testing - e2e Testing
  

# Setting up Testing in Our App
 - Install React Testing Librery (RTL)
 - Installed Jest
 - Installed Babel Dependencies
 - Configured Babel
 - Configure Parcel Config file to disable default babel transpilation
 - Jest configuration  (Jest - npx jest --init)
 - Install jsdom librery
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - npm i -D @testing-library/jest-dom