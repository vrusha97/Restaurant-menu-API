# Restaurant-menu-API

- API to provide data to a restaurant menu application. Built on GraphQL and NodeJS.

# How to run api?

- Follow the commands
  - git clone https://github.com/vrusha97/Restaurant-menu-API.git
  - cd Restaurant-menu-API
  - npm i
  - npm run start
  - Go to url http://localhost:4000/graphql on your system
  - Run the queries as
  ```
  {
    getENTREES{
        name
        extra_sausage
        price
    },
    getAPPETIZERS{
        name
        extra_sausage
        price
    }
  }
  ```

  ```
  {
    getENTREES{
    name
    extra_sausage
    price
    }
  }
  ```
  
  ```
  {
  getAPPETIZERS{
        name
        price
    }
  }
  ```

  # Note
  - I have only done for `ENTREES` and `APPETIZERS`.
