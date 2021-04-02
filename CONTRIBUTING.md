# Contributing instructions
Thank you for considering contributing to the cloud italia site repository! 

## Issues
If you find an issue in the repository please check if it's already known otherwise file a new one.

## Pull Requests (PR)

1. [Fork the project](https://help.github.com/articles/creating-a-pull-request-from-a-fork/).

2. Name the PR using `fix/*` or `feat/*` for bugs or features.

3. When you finished your work, open a PR against `main` and link the issue into the PR.

4. The CI builds a live preview of your PR that allows you to see the results of your work. Please check it carefully and,
   if you spot any problems, uncheck the "Ready for review" box or mark the PR as "Draft".
   
5. Ask for an approval.

## Gitflow
- The `main` branch is not directly writable.
- Branch `fix/*` or `feat/*` are used for development.
- The code in the `main` branch is deployed in staging.
- A release pushes the code in production.
