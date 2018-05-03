# Food Helper

## Description

Food Helper (simplified name) is intended to enable the quick creation of Restaurant Entities and their associated menus.

Once a restaurant and menu have been established it should be possible to add rankings to individual elements of that restaurant (such as aesthetic and service) as well as targeted rankings against food items.

Such rankings can be used to establish a general ranking for any eatery as well as a provide a resource to track food items that you may have tried (and consequently food items that you may want to try).  

## Preferred Package Manager

The package manager [`yarn`](https://yarnpkg.com/en/) is preferred for ease-of-use. 

## Data Contract

The [mockRestaurant](food-helper-frontend/src/Fixtures/mockRestaurant.json) provides an idea of the current shape of a restaurant and its sub-entities.

In the construction of this contract it is possible to see that the contract lends itself to a relational database. If it should become possible to easily create and maintain such a database it would be preferable in order to provide advance analytics and ease the burden of possible data migration.  

## [Back End](food-helper-backend)

### Technology

|Library   |Purpose               |Rationale                               |
|----------|----------------------|----------------------------------------|
|Express   |General Purpose Server|Simple easy-to-use server               |
|MongoDB   |Database              |Document style data persistence         |
|Typescript|Development Language  |Enables more strict development practice|
|Mocha     |Test Framework        |Provided during initial configuration   |

## [Front End](food-helper-frontend)

### Technology

|Library    |Purpose             |Rationale                                                  |
|-----------|--------------------|-----------------------------------------------------------|
|Enzyme     |Test Framework      |Powerful test framework for react applications             |
|Webpack    |Module Bundler      |Enables easy imports and content bundling minification     |
|Material.io|UI Framework        |Provide advanced UI construction and responsive elements   |
|Promise    |API Transactions    |Fairly easy to work with object to enable data transmission|
|React      |Component Framework |Easy to use and performant component framework             |
|Typescript |Development Language|Enables more strict development practice                   |
