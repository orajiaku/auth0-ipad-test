# Auth0 iPad bug

This repo demonstrates a bug when running getting tokens on an iPad. The project is deployed here https://auth0-ipad-test.vercel.app/.


The culprit has been narrowed down to the `getAccessTokenSilently` function call, which only fails when a scope parameter is passed in. Also, this failure is only observed on iPad's for now.

## Steps to reproduce
* Go to https://auth0-ipad-test.vercel.app/on a laptop/desktop
* Click on authenticate and authenticate with the following credentials
    email: test@gmail.com
    password: P@55W0rd
* You should be authenticated correctly.
* Go through all the steps above but on an iPad, and you should get a `Login Required` Error.

## Software
* The project was built on Node 10.16.0
