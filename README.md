# ticketbuddy component library


## Usage

To install dependencies
```
$ yarn install
```

To build
```
$ yarn build
```

To run tests
```
$ yarn test
```

To run Storybook
```
$ yarn storybook
```

## Data handling

#### Global state
We use React contexts to store:
- User's state and profile information.

We use react hooks for:
- Fetching data
- Once a form is submitted, we re-load the state.
