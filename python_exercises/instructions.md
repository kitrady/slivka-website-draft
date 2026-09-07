# Python Exercise Instructions

These instructions will go over how to use git in conjunction with the Python exercises in this repo. Start by reading and following along with these instructions, and look at and edit the specified Python files as directed to complete the exercises.

## Editing the Code

While you could technically edit the code in your terminal via a terminal based editor, that would be hard and unnecessarily complicated. Instead, you should use a text editor, preferably a code editor specifically, preferably an IDE (aka an integrated development environment).

While any editor would work, I would strongly recommend you use one editor in particular: the free PyCharm editor made by JetBrains. My reasons are as follows:
- If we all use the same editor, we will all be able to do exactly the same things in exactly the same ways with minimal confusion.
- JetBrains is a company enterily dedicated to making editors and other development tools, often customized to specific languages, therefore making their editor experience far more seamless than with other editors that have to accomodate many languages at once. All the software developers I know personally swear by JetBrains products.
- While PyCharm is the JetBrains editor for Python, it can seamlessly support HTML, JavaScript, and CSS stylesheet code/syntax checking. The reason I am suggesting the Python editor in particular is Python is a very common language, so it would be useful to have a high quality editor for it installed on your computer.
- All JetBrains IDEs come with insanely comprehensive spell checkers that outperform every normal text editor I have ever seen. PyCharm tells me when a phrase is tradionally written with a hyphen instead of a space; when I have used the British spelling as opposed to the American one; when my sentences are over 40 words long which, according to research, is when sentences become cumbersome to read; and much, much more. Given that a large portion of the work we will be doing is writing and editing text, I feel this is a very helpful feature.
- While the basic JetBrains IDEs are free, they also come with a whole suite of professional industry grade features that normally cost $100 per year to use, but you can get them for free if you just give them your university email. We almost certainly won't be needing those features, but hey they are really cool to have.

If you decide to go with PyCharm, the process is as simple as downloading the app, running the installer, and going with all the default options. Once PyCharm is installed, run the app, select the "open" option to open a folder already on your computer, and select "trust this project". Either way, once you have this repo open in an editor, you can move onto the next steps!

## Python Exercise One

You should have this repo open in your editor, and you should be reading these instructions from the editor. Please open your individually named Python file, found at `python_exercises/<you-name>s_python`.

In this Python file, you should see the first exercise: fixing a broken function. When you run the file right now, you should see that the printed output doesn't make grammatical sense. Please make a small edit to the relevant function so that the output does make grammatical sense. Once you have done that, you can move onto saving your changes with git!

## Saving and Sharing Changes With Git

This section is going to go over what to do after you have made changes to your local copy of the repo (applicable after completing exercise one or after making any changes). The next step is to save those changes and make the main copy of the repo at https://github.com/kitrady/slivka-website-draft display those changes.

### Local vs Remote Repos

I just talked very abstractly about "saving changes" and "displaying them on the main copy of the repo", but now we need to talk technical specifics. GitHub respositories have a very specific structure, and you need to understand that structure to use git affectivly. The key idea to keep in mind is that git and GitHub are specialized file management tools that help software developers keep their code organized and allow many devs to work on the same project at once without confusion.

The first concept we are going to learn is the difference between a local repo and a remote repo. You likely already understand this if you understood the distinction between your local copy of the repo and the global copy of the repo, but we are now defining it with more precise vocab: instead of calling the repo on the GitHub page the "global" repo, call it the remote repo, because that is the proper vocab. The "remote" is a reference to another repository that your local repo communicates with. Because you cloned your local repo from the repo on the GitHub page, the GitHub page repo is your remote repo.

Both your local repo and the remote repo are whole, complete, fully functioning repos in their own right; the difference is that we treat the remote repo on the GitHub page as the ultimate canonical version. Because we treat it as the canonical version, it is necessary to add the changes you made on your local repo to the remote repo so that everyone else can see and incorporate your changes.

### Definition of a "Commit"

In the above section further defined the idea of "the global copy of the code", and in this section we are going to further define the idea of "saving your changes". While your code editor may autosave your changes to the files on your local machine, git does not "autosave" your changes to be added to the remote repo. This is a good thing, because it allows you to finish making all the edits needed to add a feature, fix a bug, and so on before the changes are bundled up to be shared. It would be bad if every little change you made was primed to be added to the remote repo, because then the remote repo would receive non-functional fragments of the changes necessary to accomplish the goal. Additionally, this is useful in the case you royally mess up whatever changes you are making, because you can just reset your local copy and start over without worrying about how you are affecting the canonical copy.

So, how do you bundle up your changes to be shared, if every little edit is not automatically being shared? The answer is with commits. You make changes in your local repo, you add those changes to a commit (aka staging changes for commit), and then you actually commit those changes to save them all as a little bundle of edits. For right now we are just explaining concepts; terminal commands to actually do this are covered in a below section.

### Definition of "Pushing" a Commit

In the above section, we further defined the idea of "saving changes" but we didn't actually do anything to "share" our changes. We just bundled up some edits in a commit, we didn't actually send the commit anywhere. The final step is the basic "edit saving and sharing process via git" is pushing commits to the remote repo.

Once we bundle edits into a commit, they are still just sitting on your local machine. To incorporate them into the remote repo, we need to send them to the remote repo, which we do by pushing them to remote repo. So the takeaway of this section is that, in the coding world, "push" and "send" are synonyms ("send the commit to the remote" and "push the commit to the remote" are both equally grammatically correct). Again, commands to accomplish this are covered in a section below this.

### Git Commands to Commit and Push Changes

You should now understand the ideas of adding (aka staging) changes to files, commiting said changes, and pushing that commit to the remote repo. We will now go over the command necessary to actually do this via your terminal.
- In your terminal, make sure you are inside the repo root (aka inside the slivka-website-draft folder).
- To see what files you have made changes to, run `git status`. If you made changes, you will most likely see a section for "changes not staged for commit". Depending on exactly what kind of edits you made, you may also see "untracked files" and "changes to be committed".
- To add changes to your commit (aka stage changes for commit), run `git add <file-path>`. Changes are added at a per-file level, so every change you have made in a file will be included if you stage the file. The `<file-path>` must match the file name/path listed in the `git status` output, otherwise git will have no clue what you are talking about. You can just copy-paste the list items from git status if you want. However, this is a great time to use tab autocomplete, and I strongly recommend doing so.
- After adding file to the commit, you can run `git status` again, and you will see that the files you staged are now in the "changes to be committed" section.
- After you have added all the edited files you want to be in this commit, run `git commit -m "YOUR COMMIT MESSAGE HERE"` to actually commit said files. It is necessary for you to add a commit message if you want your commit to work. Your commit message should describe the changes you made in this commit (e.g. a good commit message for the first exercise would be "fixed programming languages print statement bug"). If you do not add a commit message, or forget to add one, git will force you to add a commit message. It will do this not by asking you to rerun the command with an included commit message (the logical and reasonable thing to do), but rather by forcing you into a terminal based text editor called Vim. If this happens to you, I would recommend just closing your terminal and opening it again: you will lose nothing other than your location within the file structure. However, if you don't want to run from Vim, but rather conquer it head on, please see the "Escaping Vim" section down below.
- Once you have committed your changes, you can push them by running `git push`. If you get an error along the lines of "rule violation for refs/heads/main" or "changes must be made through a pull request" that's my fault. It means I forgot to change the repo settings / the settings are out of sync with the stage of the exercises you are at (just ping me in the discord and I will fix it).

## Python Exercise Two

We have covered how to incorporate your changes into the remote repo, so now we are going to cover how to incorporate changes from the remote repo into your local repo. To do this, I am going to add the next excersise to your personal python excersise file via pushing a commit to the remote; then, you are going to get that new excersise from the remote to your local repo.

The first step here is letting me know you are onto the second exercise, so I know I need to make the change to your personal Python exercise file. Then, once I have confirmed everything is set up, read the next section for how to get the changes onto your local machine. 

Once you have done that, you can complete the exercise as you normally would. The goal of the exercise is to fill in the variables with the correct values. Once you have finished the exercise, please check your edits with `git status`, add your changes with `git add <file-path>`, commit your changes with `git commit -m "YOUR COMMIT MESSAGE (REQUIRED)"`, and push the changes with `git push`.

A couple notes on this "status, add, commit, push" process that make it simpler
- Git add takes any valid file path as an argument. Technically, a single file *or a single folder* is the trivial case of a file path. This means we can add whole folders of changes at once, instead of just single files at once. If you remember, we discussed how `.` is a keyword meaning the current folder. At the time we introduced it, `.` was rather useless, but now we have a use for it. If we want to add all the changes in the folder we are currently in, we can do `git add .` and since we are in the repo root, `git add .` will add all the changes we have made in our local repo. So if you are going to include all the changes you made in this commit, you should just run `git add .`.
- You don't have to immediately push every commit you make. Pushing just sends your changes to the remote repo (the "canonical" version of the repo everyone uses). If you don't want to share your changes yet, you don't have to push. You can make multiple commits before pushing, and when you do push they will all get pushed to the remote just fine.
- You can add all your changes you have made so far to a commit, but you don't have to. Git will give you a little warning if you commit with unstaged changes, but that is basically a reminder in case you forgot what you had staged, not an actual error of any kind.

## Getting Changes From the Remote

### Aka Pulling Changes From the Remote

This section is going to be much shorter than the previous ones because the idea here is pretty simple: if you can add your changes to the remote, you need a way to get other people's changes from the remote to your local repo.

The key vocab term here is "pull". You "push" changes to the remote, and you "pull" changes from the remote (side note: ppl often think of this as a vertical flow chart, so you might also hear people say they are "pushing changes up" and "pulling changes down").

The command here to use is `git pull`. The one big caveat is that, before doing `git pull`, you should do `git status` and confirm you have *no changes in your local repo (staged or unstaged)*. While pulling down changes from the remote when you have edits locally will likely be fine, there's a chance there will be conflicts and git will get mad. 

I will cover what to do in this situation later, but for now, to be safe, please just undo any changes locally before pulling if there are changes present. There is a handy little git command to undo any changes you made, meaning you don't have to do it manually. The command in question is `git restore <file-path>`. This is identical in form to git add, with the difference in behavior being that git restore undoes changes instead of staging them like git add does. Additionally, if you stage changes but later decide you don't want to include them in this commit, but still want to keep the changes locally (e.g. you started making changes unrelated to the goal of the commit, but forgot and commited those changes anyway), you can unstage them with git restore. Just do `git restore --staged <file-path>`. Make sure you include the `--staged` otherwise it will undo your change completely, and you won't be able to get it back.

## Python Exercise Three

By now, you should know the basics of how to use git. This is already a few commands more than you would learn in CS 211 iirc. But, because we are specifically going to be doing a lot of editing and drafting work in this repo, there is one more feature that I think we should make use of: branches and pull requests. These features will allow us to further separate the canonical version of the code and personal versions of the code, as well as allow us to give feedback and propose changes before we add changes to the remote repo.

The first step is to read the section below to understand what branches and pull requests are. Once you have done that, create a new branch and start making your changes for exercise three. The goal of exercise three is very simple: make me a silly little program that does something silly and pointless. Once you have done that, stage, commit, and push your changes, but this time on your branch instead of the main branch. Then go to the repo webpage, create a pull request, ping me on the discord, and wait for me to review your PR. I will then do a formal PR review, make some comments to request changes to make your silly little program even sillier, and you should make changes to incorporate that feedback. After that, I will approve your PR, you can merge it into the main branch, and you can switch back to the main branch and pull down your own changes.

## Using Branches and Pull Requests

These two features of git allow devs to temporarily make alternate but parallel versions of the repo so that bigger changes can more easily be made over time and reviewed by others. Branches are the feature that allows the different versions of the repo to exist; pull requests are the feature that allow others to review the changes and for the alternate version of the repo to be merged back into the main version.

## Branches

Different branches in a repo are different (but parallel, if you like thinking in flow charts) versions of the code. The default branch that already exists in every repo is the main branch. A branch starts by branching off from the main branch (aka a branch starts with an identical copy of the code in the main branch). Then, changes are added to the branch, before eventually the branch is merged back into the main branch, therefore making the changes contained inside the branch part of the main canonical version of the repo.

To create a branch, run `git checkout -b branch-name`. Branch names can be one word, but should really be no longer than three (not because it will break anything, but just because its convention). The words should be separated by dashes and the name should contain no other special characters. The branch name should somewhat describe what your goal for this set of changes is.

To check what branches exist on your local machine and to see which branch you are currently on, run `git branch`. To switch between branches, run `git checkout branch-name`. Be careful to be intentional about when you switch branches – branches truly are parallel but separate versions of the code, so changes you make in one branch won't show up in the other. If you are not careful you could make some mistakes (e.g. accidentally split up a set of changes between two branches).

One important detail is that both your local and the remote repo are fully functioning repos on their own, meaning they can each have their own separate sets of branches. What this means for us is that creating a branch locally does not automatically create a branch in the remote. Because of this, when you push a commit for the very first time, the push will fail with the message "the current branch has no upstream branch". It will then say "to push the current branch and set the remote as upstream, use `git push --set-upstream origin test`" which will do as promised and allow you to push the branch. You can just run `git push` as normal, get this error, and copy-paste the command it gives you to fix it (there is no need to memorize the command, everyone just copy-pastes it). After the initial push, the rest of your pushes will work as normal.

## Pull Requests

Pull requests are a GitHub specific feature used to bundle up a set of related changes, give feedback on those changes, and merge those changes into the main branch easily. Because they are GitHub specific, we will be doing them through the GitHub repo webpage, not the terminal.



Kit's notes on what the instructions need to cover next (please ignore)

- new branch
- more changes
- repeat
- pull request
- code review
- incorporate changes
- repeat
- resolve comments
- get approval
- merge
- switch to main and pull

- do whole branch thing again but get merge conflicts

- stashing changes?
- git restore in its own section?
- The structure of terminal commands?
- Need to write Vim section