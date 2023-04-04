# Storefront

## Lab 36 

![UML](./assets/lab36.png)

[CodeSandBox](https://codesandbox.io/p/github/j-davitt/storefront/redux?file=README.md&workspace=%257B%2522activeFilepath%2522%253A%2522README.md%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clg1llk5y004d356n8bju73k9%2522%253A%257B%2522key%2522%253A%2522clg1llk5y004d356n8bju73k9%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clg1llk5y004e356nuj8xxcl9%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clg1llk5y004d356n8bju73k9%2522%252C%2522spacesOrder%2522%253A%255B%2522clg1llk5y004d356n8bju73k9%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)

### Problem Domain

#### Categories
- State should contain a list of categories as well as the active category.
- Each category should have a normalized name, display name, and a description.
- Create an action that will trigger the reducer to change the active category.
- Update the active category in the reducer when this action is dispatched.
#### Products
- State should be a list of all products.
- Each product should have a category association, name, description, price, inventory count.
- Create an action that will trigger when the active category is changed.
- HINT: Multiple reducers can respond to the same actions.
- Create a reducer that will filter the products list based on the active category.
#### Active Category
- State should store active category.
- Other components (products, etc) might need to reference this.

