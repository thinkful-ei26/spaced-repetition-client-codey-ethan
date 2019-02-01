# SpanishX

This is the client repo for SpanishX, a spaced repetition learning app for the Spanish language.

### Deployment

The client is deployed at https://spaced-repetition-codey-ethan.herokuapp.com/ 

The server app is deployed on Heroku at https://srs-codey-ethan.herokuapp.com/ and the server repo can be found at https://github.com/thinkful-ei26/spaced-repetition-server-codey-ethan

### App
The app presents users with a sequence of words, so that they can practice and improve their Spanish language skills. The order of the words changes based on past answer history based on a spaced repetition algorithm.

### Techonologies
The client side of this project uses
 * React
 * Redux for state management
    * ReduxForm for form management
    * Thunk for asynchronous request management
 * Passport with JWT to handle user authentication
