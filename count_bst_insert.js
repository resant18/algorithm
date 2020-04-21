'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'createBST' function below.
 *
 * The function accepts INTEGER_ARRAY keys as parameter.
 */

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function createBST(keys) {
    // Write your code here
    let counter = 0;
    let root = null;

    for (let key of keys) {
        if (root !== null) {
            insert(root, key, counter);
        }
        else {
            root = new Node(key);
        }
        console.log(counter);
    }    
}

function insert(root, key, counter) {
    counter++;

    if (key < root.val) {
        if (root.left === null) {
            root.left = new Node(key);
        }
        else {
            insert(root.left, key, counter);
        }
    }
    else {
        if (root.right === null) {
            root.right = new Node(key);
        }
        else {
            insert(root.right, key, counter);
        }
    }
}

function main() {