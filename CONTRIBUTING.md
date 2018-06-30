# Contributing

Congratulations, you are going to contribute to the **rust-vsts** repository.
First of all, we want to thank you for spending time to improve this project!

## Table Of Contents

[Introduction](#introduction)

[How to contribute](#how-to-contribute)

* [Bugs](#bugs)
* [Features](#features)
* [Pull Requests](#pull-requests)

[Conventions](#conventions)

* [Code](#code)
* [Documentation](#documentation)

## <a id="introduction"></a>🏁 Introduction

The following guidelines ensure your contributions respect the project philosophy, design, conventions and rules.

> ⚠️ Please don't create an issue for questions. It easier to directly contact the team on [Slack](https://join.slack.com/t/rust-vsts-extension/shared_invite/enQtMzkxNzU4MTgyMDg2LTlkMjJmMzM2MmIyYmJmMjFmNDJkN2IzZmMxZDFhZTgyOGFjYWExNTkwM2YwYTQ3YmI3OWNlYjBhYjcyNGY5OTM), inside general channel. Thanks for your understanding 🙏!

## <a id="how-to-contribute"></a>❓ How to contribute

### <a id="bugs"></a>🐛 Bugs

Bug reports are one of the contributions you can do on **rust-vsts** project.

First, ensure your bug isn't listed in [issues](https://github.com/spontoreau/rust-vsts/issues). It is better to contribute to an existing issue instead of creating a new one. It's really important that you respect a specific format for your bug reports. This provides an optimal reading for contributors and ease the implementation of fixes:

```markdown
### Description
[Description of the issue]

### Bug scenario

#### Steps
1. [First]
2. [Second]
3. [and so on...]

#### Expected 
[What you expect to happen]

#### Actual 
[What actually happens]

### Additional Information
**Can be reproduced ?**: [Pick one of the following: *Yes*|*No*]

**Severity**: [Pick one of the following: *Low*|*Medium*|*High*|*Critical*]

**Version**: [version number]

**Other**: [Others information]
```

If a bug can be cover with an unit test, you are more than welcome to write it! It's one of the best way to quickly resolve the issue 👍

### <a id="features"></a>💡 Features

Features can add some new capabilities to the project.

First, ensure your feature isn't listed in [issues](https://github.com/spontoreau/rust-vsts/issues).

A feature must be created as a proposal for discussion with the community. When an agreement is found, the proposal is added as a feature inside a [project](https://github.com/spontoreau/rust-vsts/projects). A feature can be considered too large to be a single card in a project. If so, the team can decide to create the feature as a project and split it into multiples small features (for an easier integration inside the project).

### <a id="pull-requests"></a>🎁 Pull Requests

First, you need to take a look at [Conventions](#conventions) to ensure your code respect project rules. These rules are mandatories to ensure each pull request respects the philosophy of the project.

#### Authorship

All commits must be made with your personnal **Github** account and signing commits if possible (Take a look at Github documentation to set your user [name](https://help.github.com/articles/setting-your-username-in-git/), [email](https://help.github.com/articles/setting-your-email-in-git/) & [GPG](https://help.github.com/articles/signing-commits-using-gpg/)).

#### Build project

To setup dependencies, execute "_install_" command of **npm**:

```
$ npm install
```

The project can be direcly built with the "_run compile_" command of **npm**:

```
$ npm run compile
```

Code analysis need to succeed because of the continious integration. You can run it with:

```
$ npm run lint
```

> ⚠️ Always ensure build and lint succeeded before commit some code

#### Commit

Ensure each commit has an understandable message for request reviewers.

Git command example:

```
$ git add .
$ git commit -m"{message}"
```

#### Rebase

Each pull request must be synchronized with remote repository. We recommand to use an interactive rebase to synchronize local and remote repositories.

Git command example:

```
$ git fetch
$ git rebase -i origin/develop
```

External contributors have to synchronize local repository with the forked one (Take a look at the Github documentation [here](https://help.github.com/articles/syncing-a-fork/)).

#### Push

Git command example:

```
$ git push {origin} feature/{featureNameOrIssueId}
```

#### Github PR

If a Pull requests resolve an issue, include it inside the description. When approved by reviewers, pull request are merged into the "_master_" branch.

> ⚠️ To be reviewed, CI process must succeeded

## <a id="conventions"></a>Conventions

### <a id="code"></a>⌨️ Code

Please respect TSLint rules.

> ⚠️ Pull request with TSLint configuration changes whitout valid reasons will be rejected.

Don't install new dependencies. Remember that the project is an extension and the package weight must be as small as possible. If for any reason a dependency is required for a specific feature, add all the information about it in the pull request.

Use camelCase convention when naming a file.

VSTS task library isn't unit tests friendy... That's why there is no unit test setup in the project...

### <a id="documentation"></a>📚 Documentation

* Use [JSDoc](http://usejsdoc.org/) for source code if needed.
* Use [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for repository documentation.