/**
 * RECOMMENDATION
 *
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 *
 * The Developer Tools in Chrome are available under the "..." menu,
 * futher hidden under the option "More Tools." In Firefox, they are
 * under the hamburger (three horizontal lines), also hidden under "More Tools."
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for.
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
     let results = [];

    for (let bookObject of scannedTextObj) {
        let bookContent = bookObject["Content"];
        let bookISBN = bookObject["ISBN"];

        for (let bookContentObject of bookContent) {
            let bookPage = bookContentObject["Page"];
            let bookLine = bookContentObject["Line"];
            let bookText = bookContentObject["Text"];

            let searchTermIndex = bookText.indexOf(searchTerm);
            if (searchTermIndex !== -1) {
                let result = {
                    "ISBN": String(bookISBN),
                    "Page": Number(bookPage),
                    "Line": Number(bookLine)
                };
                results.push(result);
            }
        }
    }

    return {
        "SearchTerm": searchTerm,
        "Results": results
    };
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            }
        ]
    }
]

/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___|
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/

 */

/* We have provided two unit tests. They're really just `if` statements that
 * output to the console. We've provided two tests as examples, and
 * they should pass with a correct implementation of `findSearchTermInBooks`.
 *
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn);
if (test2result.Results.length === 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/** Unit Tests for my own tests (Tests 3-14), aside from the first two tests provided */

const shakesphereIn = [
    {
        "Title": "The Tragedy of Hamlet, Prince of Denmark",
        "ISBN": "9780000528532",
        "Content": [
            {
                "Page": 30,
                "Line": 8,
                "Text": "To be, or not to be: that is the question:"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "Whether \'tis nobler in the mind to suffer"
            },
            {
                "Page": 32,
                "Line": 10,
                "Text": "The slings and arrows of outrageous fortune,"
            }
        ]
    },
    {
        "Title": "Romeo and Juliet",
        "ISBN": "9780000528533",
        "Content": [
            {
                "Page": 33,
                "Line": 11,
                "Text": "Two households, both alike in dignity,"
            },
            {
                "Page": 34,
                "Line": 12,
                "Text": "In fair Verona, where we lay our scene,"
            },
            {
                "Page": 35,
                "Line": 13,
                "Text": "From ancient grudge break to new mutiny,"
            }
        ]
    },
    {
        "Title": "Macbeth",
        "ISBN": "9780000528534",
        "Content": [
            {
                "Page": 67,
                "Line": 18,
                "Text": "When shall we three meet again"
            },
            {
                "Page": 38,
                "Line": 19,
                "Text": "In thunder, lightning, or in rain?"
            },
            {
                "Page": 69,
                "Line": 20,
                "Text": "When the hurlyburly\'s done,"
            }
        ]
    }
]

let shakesphereOutTest3 = {
    "SearchTerm": "or",
    "Results": [
        {
            "ISBN": "9780000528532",
            "Page": 30,
            "Line": 8
        },
        {
            "ISBN": "9780000528532",
            "Page": 32,
            "Line": 10
        },
        {
            "ISBN": "9780000528534",
            "Page": 38,
            "Line": 19
        }
    ]
}

let shakesphereOutTest4 = {
    "SearchTerm": "for",
    "Results": [
        {
            "ISBN": "9780000528532",
            "Page": 32,
            "Line": 10
        }
    ]
}

let shakesphereOutTest5 = {
    "SearchTerm": "When",
    "Results": [
        {
            "ISBN": "9780000528534",
            "Page": 67,
            "Line": 18
        },
        {
            "ISBN": "9780000528534",
            "Page": 69,
            "Line": 20
        }
    ]
}

/** Write Positive Tests (tests that return matches) */
console.log('-- Starting Positive Tests (Tests 3-5) for exact JSON string match --');

const test3result = findSearchTermInBooks("or", shakesphereIn);
if (JSON.stringify(shakesphereOutTest3) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", shakesphereOutTest3);
    console.log("Received:", test3result);
}

const test4result = findSearchTermInBooks("for", shakesphereIn);
if (JSON.stringify(shakesphereOutTest4) === JSON.stringify(test4result)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", shakesphereOutTest4);
    console.log("Received:", test4result);
}

const test5result = findSearchTermInBooks("When", shakesphereIn);
if (JSON.stringify(shakesphereOutTest5) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", shakesphereOutTest5);
    console.log("Received:", test5result);
}

console.log('-- Starting Positive Tests (Tests 6-8) for "Results" length --');

const test6result = findSearchTermInBooks("or", shakesphereIn);
if (test6result.Results.length === 3) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", shakesphereOutTest3.Results.length);
    console.log("Received:", test6result.Results.length);
}

const test7Result = findSearchTermInBooks("for", shakesphereIn);
if (test7Result.Results.length === 1) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", shakesphereOutTest4.Results.length);
    console.log("Received:", test7Result.Results.length);
}

const test8Result = findSearchTermInBooks("When", shakesphereIn);
if (test8Result.Results.length === 2) {
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", shakesphereOutTest4.Results.length);
    console.log("Received:", test8Result.Results.length);
}


/** Write Negative Tests (tests that do not return any matches) */
console.log('-- Starting Negative Tests (Tests 9-11) --');

const test9Result = findSearchTermInBooks("question: ", shakesphereIn);
if (test9Result.Results.length === 0) {
    console.log("PASS: Test 9");
} else {
    console.log("FAIL: Test 9");
    console.log("Expected:", 0);
    console.log("Received:", test9Result.Results.length);
}

const test10Result = findSearchTermInBooks("!", shakesphereIn);
if (test10Result.Results.length === 0) {
    console.log("PASS: Test 10");
} else {
    console.log("FAIL: Test 10");
    console.log("Expected:", 0);
    console.log("Received:", test10Result.Results.length);
}

const test11Result = findSearchTermInBooks("quack", shakesphereIn);
if (test11Result.Results.length === 0) {
    console.log("PASS: Test 11");
} else {
    console.log("FAIL: Test 11");
    console.log("Expected:", 0);
    console.log("Received:", test11Result.Results.length);
}


/** Write Case-Sensitive Tests (tests that match (for example) on “The” but not on “the”) */

console.log('-- Starting Case-Sensitive Tests (Tests 12-14) --');
const test12Result = findSearchTermInBooks("verona", shakesphereIn);
if (test12Result.Results.length === 0) {
    console.log("PASS: Test 12");
} else {
    console.log("FAIL: Test 12");
    console.log("Expected:", 0);
    console.log("Received:", test12Result.Results.length);
}


const test13Result = findSearchTermInBooks("when", shakesphereIn);
if (test13Result.Results.length === 0) {
    console.log("PASS: Test 13");
} else {
    console.log("FAIL: Test 13");
    console.log("Expected:", 0);
    console.log("Received:", test13Result.Results.length);
}

const test14Result = findSearchTermInBooks("Nobler", shakesphereIn);
if (test14Result.Results.length === 0) {
    console.log("PASS: Test 14");
} else {
    console.log("FAIL: Test 14");
    console.log("Expected:", 0);
    console.log("Received:", test14Result.Results.length);
}
