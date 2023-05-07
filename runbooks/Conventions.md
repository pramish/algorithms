#### We follow couple of rules/steps before you commit the code and creating your branch name. Thanks to [huksy](https://www.npmjs.com/package/husky).

Before committing your code, please ensure that you ran `yarn lint` and `yarn format` to lint and format your code.

But if you forget `husky` will throw out an error if you have any linting errors.

`Branch naming convention`

Our default branch is development, please create a new branch from `development branch`. We'll merge development into master once we're ready to release to prod.

- If you're building a `feature`, please ensure your branch name is `feature/{TicketNumber}-{Ticket-Description}`

-> For example: feature/algo-1234-Integrate-Swagger

- If you're fixing bug, please ensure your branch name is `fix/{TicketNumber}-{Ticket-Description}`

-> For example: fix/algo-1234-Update-Missing-Swagger-Docs

When writing a commit messages, please follow following rules.

```
git commit -m "{feature/fix}: your commit message"
```

For example:

```
git commit -m "feature: integrate swagger"
git commit -m "fix: update adding logger to user service"
```

When merging a branch into development, please use merge squash as it creates one commit for your work so that we can cherry pick the commit if we have to do hot fix when we encounter a bug in production.
