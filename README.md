# Online Store Client

Online store responsive web client. Developed using React + Redux and Bootstrap. 

## Installation


Requires specific environment variables to run:


```bash
REACT_APP_API_URL=
REACT_APP_PK_STRIPE=
```

Installing dependencies:

```bash
npm install
```

## Usage

For production run:
```bash
npm start
```

## Testing 


There are end-to-end tests emplemented for this app.

### Scenarios

2 automated scenarios exercising key application functionalities (user authentication, product search, cart, payments)

1. User registration
2. Complete checkout:
- user login
- adding product to cart
- payment using credit card

### Stack used for tests

- Protractor
- Jasmine
- Chrome browser (headless)

### Running Tests

#### Software requirements / Test specific setup.

- Additional environment variable must be provided (for eample in .env file)
```bash
REACT_APP_E2E_URL=
```
- Chrome browser must be installed
- Run the update command: *webdriver-manager update* This will install the server and ChromeDriver
- Run tests
```bash
npm run e2e
```
Tests report will be generated in XML Junit format so it can be published with CI tool (tested with Jenkins)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)