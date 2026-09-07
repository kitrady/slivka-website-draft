# slivka-website-draft

This repository is meant as a place for the Webmaster and ad hoc Website Committee of Northwestern's Slivka Residential College of Engineering to create and refine edits to the site before incorporating them into the live webpage. This was created by Kit Rady, the 2026-27 Webmaster, and is a copy of his website template (found at https://github.com/kitrady/kits-website-template).

To view the current Slivka website draft, visit https://kitrady.github.io/slivka-website-draft/.

To demo the website on your local machine, run python3 -m http.server 8000. Then, open your browser and go to http://localhost:8000. When you are done demoing the website, go back to the terminal and kill the process with ctrl + c (regardless of OS). This will allow you to see the changes you are making as you are making them by reloading the page.

Since browsers cache data, changes made to the javascript or CSS won't appear on regular reload. Instead, you have to do a hard reload to reset cached data by doing ctrl+shift+r (cmd+shift+r on Mac).

# Noobs Guide to GitHub Based Programming

The following sections pertain to the various guides and exercises that can be found throughout this repository. Since the Webmaster can only expect Website Committee members to have the most basic programming experience through required intro CS classes or the EA sequence, some resources to bring committee members up to speed have been included. There are resources on how to set up git and GitHub on Mac, Linux, and windows operating systems, excersises to make git commands and GitHub concepts stick with members, and references on thorny CSS style concepts.

## Special Steps if You Are on Windows

While both Mac and Linux operating systems come with standard development tools, Windows comes with non-standard Windows flavor development tools. It is hard to overstate how much Mac and Linux comply with the norm and Windows is out there doing its own thing. Mac and Linux follow UNIX conventions; cloud servers and other abstracted servers almost always follow UNIX conventions; most development tools are designed with UNIX conventions in mind; most shell scripts are written for UNIX-style shells; almost everything that is not Windows follows UNIX conventions.

What this means for these instructions is this: Windows users are going to have to first install a little extra software to allow them to do git in a way that follows UNIX conventions. Once they install this software, they can follow the rest of this guide and future guides without any additional steps (aside from a few edge cases).

**The secret special software to install is called Git for Windows. Instructions to install are below:**
- Go to https://git-scm.com/install/windows and download the most recent version 
- Run the installer to install Git for Windows, which will install an app called Git Bash

Once that is done, you are basically done with Windows specific steps. The only special step you need to remember is that **when the instructions say to run a command in the terminal, you need to run that command in the Git Bash app.** However, there are some quirks that are unique to the terminal the Git Bash app provides:
- The copy and paste shortcuts don't work, so you will have to right-click and select copy / paste. If you do try the copy and paste shortcuts, the terminal will type weird gibberish in the text input field (this is expected behavior given how Git Bash works).
- The terminal violently flash when you enter "incorrect" inputs (e.g. hitting the left arrow key when you are already on the furthest left side of the text input field). This is also expected behavior given the style of terminal Git Bash is.

## Setup Instructions

### Adding SSH Key

If you have just made a new GitHub account (or are using git on machine you haven't used Git on before), there are some additional setup steps you will need to do. If you have already made a GitHub account and used git on this machine before, you can skip to the next section.

*Skip the next few paragraphs if you just want instructions with no explanation of why we are doing this.*

Since GitHub repositorys (aka repos) contain some of the world's most important infrastructure, ensuring that the people who can access and edit a repo's code are actually the people who are intended to have that access is important. Hackers and other malicous people could easily ruin key infrastructure if access to repos wasn't securely controlled. Thus, you have to take steps to verify that you are who you say you are. The more obvious step in verifying identity is creating and logging into a GitHub account, and having someone (repo owners or admin) give that account access to the repo, but that is only one side of the verification issue.

The other piece of the verification issue is ensuring your machine actually belongs to you. Sure, you are signed in to GitHub on your browser, but your browser cannot vouch for your whole machine all the time (e.g. what if you want to program without having to open your broswer and go to github.com?). So, we have to do something that shows that the machine you are working on belongs to (or is at least being borrowed by) you, the owner of the GitHub account. 

This "machine verification" will be done via public and private encryption keys. More specifically, you are going to generate a key pair, save the private key to your machine, and add the public key to your GitHub account.

*Instructions begin here:*

1. Open a terminal and run this command: `ssh-keygen -t ed25519 -C "your_email@example.com"` where the email address is the one associated with your GitHub account.
2. You will then be prompted for a save location; the default is fine, so just hit enter.
3. Next, you will be prompted for a passphrase – just hit enter. You can enter something if you want, but this is setting a passphrase to access your keys in the future (in case someone steals your computer). Its unlikely you will remember it and totally fine to make it blank by just hitting enter.
4. Start the ssh key agent by running `eval "$(ssh-agent -s)"`
5. Add your private key to the agent by running `ssh-add ~/.ssh/id_ed25519`
6. To add the public key to your GitHub account, first run `cat ~/.ssh/id_ed25519.pub` to output the public key and copy that output.
7. Then, go to your GitHub account settings, find the SSH and GPG keys section, and click "New SSH key". Make the title a name denoting your machine (e.g. Kit's Macbook), keep the key type as authentication key, paste the key into the text box, and hit the button to add the key.

Congrats! You have just added your machine to your GitHub account via an SSH key, and can now do stuff because your machine is verified!

### Learning How to Navigate File Structures in the Terminal

Guess what? Repos are just folders that contain more folders and files and code! And guess what? Git is a command line tool for management of code repositories, meaning you have to use it from the terminal! So you know what that means? You will have to learn to navigate through folders containing files and more folders via the terminal! Here are the commands and arguments you need to know to do that:
- `ls` – the list folder contents command. This is the most useful command. You know how when you are navigating through folders and files on your computer or in google drive, you can see all the stuff that's in the folder you are currently in? Well terminals don't do that, they show you nothing. This makes it a bit hard to know what the hell you are doing. But by typing `ls` and hitting enter, you can make the terminal list all the contents of the folder you are currently in. Why is it spelled LS? According to some people, it stands for LiSt.
- `cd <folder-name>` – the changing which folder you are in command. By typing `cd` followed by the name of a folder that is inside the folder you are currently in, you can go inside the folder that you named. The folder you name must be one that is inside the folder you are currently in, because otherwise the terminal will have no clue what you are talking about (i.e. this command doesn't magically teleport you to the folder you are thinking of, it only understands folders relative to the folder you are currently in). It also won't work if you type the name of a file, because this command is for going inside of folders, not opening files. It is spelled CD because it stands for change directory (directory is a synonym for folder).
- `.` – this is not a command, rather more of a keyword. It symbolizes the directory you are currently in. For example, if you typed `cd .` absolutely nothing would happen. This is useful in other instances tho.
- `..` – again, this is a keyword not a command. It symbolizes the directory that is above the one you are currently in. For example, if you were in a folder named `myThings` and it contained the folders `myStuff1` and `myStuff2` and you did `cd myStuff1`, you could get back into the `myThings` directory by doing `cd ..`. This is really useful, because otherwise you have no way to go back after going into a folder. Given the pattern of `.` and then `..` you might think `...` is two directories above you and so on, but that is not the case (`...` doesn't mean anything).
- `example/file/path` – you can navigate multiple folders at once, you don't have to work with them one by one. You can do this via file paths, which specify several folders to traverse and are separated with forward slashes. For example, if you were in the `myShit` folder, which contained the `myThings` folder, which contained the `myStuff1` and `myStuff2` folders, you could do `cd myThings/myStuff1` to switch into the `myStuff1` folder. From there, you could do `cd ../myStuff2` to switch into the `myStuff2` folder, because that folder is contained one level up from where you currently are, and `..` means "the folder one level up". You can also specify files with file paths, hence the name. For example, if you were running a command that took a file as an argument instead of a folder, you could give it a straight file name, or you could give it a file path that actually ends with a file (e.g. `command myThing/myStuff1/file1.txt`).
- `~` and root – the "root" of a file structure just means "the top". For example, if you had a repository called `foo` on your computer, that means there would be a folder named `foo` with all the code inside it, and the root of the repository would be that `foo` folder. Operating systems also have roots, and you can technically navigate to them, but you generally won’t need to for normal development. There can also be multiple users on one machine, and they each get their own home directory where their stuff is stored. Other users generally can’t access the private contents of your home directory. Your own home directory is symbolized by `~`. On Mac, this is the user folder, meaning that on my computer, this repo is stored at `~/Projects/slivka-website-draft` which matches up with the fact that I can open finder (Mac version of file explorer) and navigate kitrady -> Projects -> slivka-website-draft.
- autocomplete – this is a feature of most terminals as opposed to a command or keyword. When you are typing a file name, folder name, or file path, your computer can take what you have already typed and compare it to the valid files / folders to either autocomplete what you are typing or list possibilities. Please use this feature all the time, don't waste time typing.

### Cloning the Repo

Now that you have access, you need to get the code onto your machine so you can edit it. The repo is global cloud copy of the code, and you need to get a copy of it onto your local machine so you can make your edits (you can technically edit the global version of the code via the repo webpage, but that is not a good idea at scale / long term). To do this, you are going to "clone" the repo (which is just a folder of all the code and files) into the folder of your choosing.

1. Go to the slivka-website-draft repo home page, click on the green button the says "<> Code", select the SSH section, and click the button to copy the text.
2. Open a terminal and, using the commands discussed above, navigate to the folder where you want this repo's code to be saved (aka the folder where you want the repo root folder to live).
3. Type `git clone ` and then paste the text you copied and hit enter.
4. Run `ls` to see the directory contents and proof to yourself that you did in fact clone the repo. Then run `cd slivka-website-draft` to switch into the repo so you can begin doing git stuff!

Congratulations! You now have a local copy of a GitHub repo on your computer and can now actually make edits! You may now move onto the practice excersises described below.

## Git and GitHub Practice Excersises

Please reference to `python_excercises/instructions.md` for the next steps in becoming familiar with git and GitHub. You can view the instructions either via the repo's webpage by using the file structure UI, or by opening up your clone of the repo in a code editor. I would strongly reccomend you use the PyCharm editor (I discuss my reasons why in the instructions), but you can techincally use any editor you want.

## Advanced CSS Concepts Used in this Repo

While HTML, JavaScript, and CSS lessons will be given in person, the more complex CSS topics don't lend themselves to a cohiesive in person lesson. While an overview may be given, it is better to just reference these concepts as needed from a reference sheet rather than trying to memorize them or understand them all at once. Please see `guide-to-css.md` for that reference sheet.