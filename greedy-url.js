const getURL = function (arg) {
    const pattern = /https?:\/\/[^\s]+/g
    return arg.match(pattern)
}

const greedyQuery = function (arg) {
  const pattern = /https?:\/\/[^\s]+(?:\?[\w]+=[\w]+(?:&[\w]+=[\w]+){2,})/g
  return arg.match(pattern);
};

const notSoGreedy = function (arg) {
    const pattern = /https?:\/\/[^\s]+(?:\?[\w]+=[\w]+(?:&[\w]+=[\w]+){1,2})/g
    return arg.match(pattern)
}

// let testDataset2 = `
//     https://example.com/path?param1=value1&param2=value2&param3=value3
//     http://test.com?name=John
//     https://example.org/resource?id=123&sort=asc&filter=active&limit=10
//     http://example.net?q=search&lang=en&sort=desc
//     https://mysite.com/index.html
//     https://anotherexample.com/query?a=1&b=2
//     http://yoursite.org/page?x=10&y=20&z=30
//     https://website.com/?q=test&category=books&price=low&rating=high
//     http://random.com?param=value
//     https://fullquery.com/details?param1=value1&param2=value2&param3=value3&param4=value4
//     http://nquery.com/?single=param
//     http://empty.com/
// `;

// let testDataset = `
//     https://example.com/path?param1=value1&param2=value2   // 2 query parameters
//     https://test.com/page?param1=value1&param2=value2&param3=value3   // 3 query parameters
//     http://site.org?param1=value1   // 1 query parameter (should not match)
//     http://example.com?param1=value1&param2=value2&param3=value3&param4=value4   // 4 query parameters (should not match)
// `;

// console.log(notSoGreedy(testDataset));


// let dataset =
//     "qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you";

// console.log(getURL(dataset))

// console.log(greedyQuery(testDataset2))