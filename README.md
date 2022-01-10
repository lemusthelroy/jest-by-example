# Agenda

This is the agenda for the Jest By Example training session

### Running application - `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Running tests - `yarn test`

Launches the test runner in the non-interactive mode.\

### Planets page

- How do we get the planet data?
- Usage of useQuery

### Test descriptions

- `Describe` the component you are testing
- Then what `It` is expected to do

### Planets page - waiting for data

- `waitFor` - waits for function to not throw error / fail test
- `await findBy*` - waits for that element

### Planets page - mocking the data

All of our data network responses are mocked with MSW. This allows us to run tests and have endpoints responsd with data.

The handlers are located in `src/mocks/handlers.ts`

### Wrappers

We need test wrappers, in order to use functionality that requires context outside of the component

Wrappers are often required when testing components that use the following:-

- React Query
- State management solutions - Redux, useContext
- Navigation
- And many more

### Summary

We have written tests that deal with the following

- Network requests
- Querying the DOM
- Waiting for elements
- Navigation
