# Node.js Server Port in Use Error

This repository demonstrates a common yet often overlooked error in Node.js: attempting to start a server on a port that's already in use.  The `bug.js` file shows the basic code, and `bugSolution.js` provides a robust solution.

## Problem

The provided `bug.js` file creates a simple HTTP server. If you run it and then attempt to run it again without stopping the first instance, it will fail to start because the port is already occupied.

## Solution

The `bugSolution.js` file addresses this by incorporating error handling.  This allows the server to gracefully handle the `EADDRINUSE` error (address already in use) and retry connection or provide informative messages.