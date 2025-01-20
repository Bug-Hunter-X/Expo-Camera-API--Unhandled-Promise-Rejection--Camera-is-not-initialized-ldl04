# Expo Camera Initialization Bug

This repository demonstrates a common bug encountered when using the Expo Camera API: attempting to access camera features before initialization is complete.  The bug manifests as an `Unhandled Promise Rejection` indicating the camera is not yet initialized.

The `cameraBug.js` file shows the buggy code. The `cameraBugSolution.js` file provides the corrected implementation.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app using Expo Go or a similar environment.
4. Observe the error message in the console.

## Solution

The solution involves ensuring all camera operations are performed only after the camera has finished initializing. This is typically handled using asynchronous operations and the `hasCameraPermissions` and `isCameraLoaded` flags.