export let APIURL = '';

switch (window.location.hostname) {
  // this is the deployed angular application
    case 'kew-clientstars.herokuapp.com':
    // this is the full url of the deployed API
    APIURL = 'https://kew-clientstars.herokuapp.com'
    break;
    default:
    // this is the local host name of your API
    APIURL = 'http://localhost:4200';
  }