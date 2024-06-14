// For making a request and fetching a resource, use the fetch() method. It is a global method in both Window and Worker contexts. This makes it available in pretty much any context you might want to fetch resources in.

// The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response is an HTTP error status. You can also optionally pass in an init options object as the second argument (see Request).


//fetch promise only reject when a network error is encountered (usually happens when there is a permission issue).

//fetch request does not reject http errors (404 etc). instead a then() handler must check the response.ok and/or response.status.