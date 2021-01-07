# Cat Tinder Frontend

### Card: Create React App
- $ yarn create react-app cat-tinder-frontend
- initial push to GitHub


### Card: Frontend structure
- Model Cat will have name, age, enjoys
- Folder structure - assets, components, pages
- Components - Header, Footer
- Pages - Home, Index, Show, New, Edit, NotFound
- Added routing to all pages: $ yarn add react-router-dom
- Added bootstrap: $ yarn add bootstrap, $ yarn add reactstrap
- Added mock cats file, set to state
- Added UI to header and footer
- Added color scheme: Pink #A91B60 Fuchsia #FF0080 Hot Pink #EC9EC0 Champagne #EBE0D0


### Card: Read Functionality
- Added active links to Header, Footer, Home
- Refactored static index route to be a dynamic route
- Passed cat object to index, mapped over array
- Refactored static show route to be a dynamic route
- Pulled id from params to find one cat
- Passed cat to show page
