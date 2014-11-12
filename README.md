# Paginator

A Meteor package with a utility object for handling database queries and data
visualization in pages and optimizing loading times and rendering performance.

### Usage

```javascript
// Instantiate a new Paginator
var elementsPerPage = 5
var paginator = new Paginator(elementsPerPage);

// All the methods listed are reactive and trigger a recomputation when needed

// Tell how many elements we have to divide into pages
paginator.calibrate(10);
// 10 elements with 5 per page means 2 pages. Paginator knows that!

// Get current page
var currentPage = paginator.page(); // -> 1
// Set current page
currentPage = paginator.page(2); // -> 2

// Get an array with info about pages:
var pages = paginator.pages();
// -> [{index: 1,active: false},{index: 2, active: true}]

// Ask if there is more than one page
var shouldShow = paginator.show();
// -> true

// This returns valid Meteor 'limit' and 'skip' query options to use with a Collection query.
var qo = paginator.queryOptions();

// Self explaining methods
paginator.next();
paginator.previous();
```

### License

MIT
