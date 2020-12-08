import React from 'react';
import { Alert, Col } from 'react-bootstrap';
import BackNav from './BackNav';

const GitAliasArticle = () => {
    const content = String.raw`     
[alias]
s = status
f = reset head --hard
cm = checkout master
cd = checkout development
ac = !git add . && git commit -am

rf = !git pull -r origin development

#pretty printing
lm = log -10 --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit

#checkout new branch
cnb = !git checkout -b

#list all branches
lb = branch --all --format='%(refname:short)'

#flush all local branches but dev
fb = !git branch | grep -v master | xargs git branch -D

# list aliases
la = !git config -l | grep alias | cut -c 7-

# if you rebase-squash a ton, this refreshes the timestamp
imworking = commit --amend --reset-author --no-edit

#my-work-is-good-and-i-hate-stash
stub = commit -n -m 'stub'
`;

    const contentNotes = String.raw`     
Git Alias are the powerhouse to your environment. 
Why type 'git status' when 'git s' does the same thing?

Feel free to take, use, and change as you wish!

* Drop this into you .gitconfig file at
C:/Users/YOURNAME/.gitconfiig
* Save, restart your git console
* Enjoy!
`;

    return (
        <Col>
            <BackNav />
            <p>
                <pre>{contentNotes}</pre>
            </p>

            <Alert variant="dark">
                <p className="mb-0">
                    <pre>{content}</pre>
                </p>
            </Alert>
        </Col>
    );
};

export default GitAliasArticle;
