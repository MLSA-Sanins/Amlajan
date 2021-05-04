# Contribution Guidelines [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues) 🤝🏽🍀:

<p align="center"><img src="./readme_assets/Contribute.png" width=600></p>


#### Preliminaries:
- Download and install the latest stable version of [Git](https://git-scm.com/downloads) 📥 for version control
- Create a [Github](https://github.com/join) Account 📇 
- Download and install latest stable version of [NodeJS](https://nodejs.org/en/download/)
- Download and install latest stable version of [VS Code](https://code.visualstudio.com/download)

- Fork [this](https://github.com/ADRE9/Amlajan) repository 


- Open Terminal/Command Prompt/Powershell/Git Bash and navigate to a location where you want the project files to be stored
```
cd D:\my_preferred_location
```
- Clone your forked repository 🧩.
```
git clone https://github.com/<your_user_name>/Amlajan.git
```
- Now move inside the project directory 📁 (using the terminal).
```
cd Amlajan
```
- Check for the current remotes of the git repository (the local copy of your forked repository)
```
git remote -v
```
- Add add a reference to the upstream(this repository which you clones) repository.
```
git remote add upstream https://github.com/ADRE9/Amlajan.git
```

- Install the dependencies and packages
 ```
 yarn
 ```
- Start the react app in the local server in development mode 
```
yarn start
```
- Agree to Install Expo when prompted in terminal

- Open the project files in VSCode (assuming you have already opened the terminal and navigated inside the project directory)

```
code .
```

- Fetch any recent changes from the upstream repository

```
git pull upstream master
```

- Comment on any existing [issue(s)](https://github.com/ADRE9/Amlajan/issues) raised by **project maintainer** [@ADRE9]. Otherwise raise a [new issue](https://github.com/ADRE9/Amlajan/issues/new).






> ## Guidelines for raising a new issue:
>
> - Each issue should have an appropriate and short title like "Bug in Upload Page"
> 
> - Be specific about your intended changes/suggestions
>
> - Refrain from using phrases like "Hi, I am ..", "Please assign me this issue", "Thank You..", etc. We are only interested in technical parts
>
> - Attach a screenshot/clip if applicable
>
> - Please be patient enough. The project maintainers/mentors would review it as per their schedule. Please do not start putting comments like "Please check this" etc.
>  
> - Do not blindly comment on issues raised by other participant(s). Unless a minimum of 48 hours has passed since their assignment, the issue would not be re-assigned(excluding certain cases). The issue raised by a participant will always to be assigned to him/her by default. Do not spam "Interested", "Please assign me" in others issues. 
> 
> - Always keep a note of the deadline. 

- Once the project maintainer(s)/mentor(s) have reviewed the issue/assigned you the issue. Start working on the changes

- Create a new feature branch (DO NOT name it MAIN or MASTER or anything random).
   ```
   git checkout -b <your_branch_name>
   ```
- Finish your work

- Make sure that you do not change any code unrelated to the task that you have been assigned

- Ensure that your changes apply to all screensizes

- Comment any new code addition(s)

- Do not mess up the directory structure

- Preview your changes and test them properly before proceding ahead

<p align="center"><img width=35% src="https://media2.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif?cid=ecf05e47pzi2rpig0vc8pjusra8hiai1b91zgiywvbubu9vu&rid=giphy.gif"></p>

- Make a small clip or take screenshots.

- Stage your changes.
```
git add .
```
- Commit the changes.
```
git commit -m "message relevant to your changes (usually title of the pull request)"
```

- **Make sure to condense your changes into a single commit**. [Reference](https://levelup.gitconnected.com/how-to-squash-git-commits-9a095c1bc1fc)

- Push the changes to your remote repository on GitHub.
```
git push origin <your_branch_name>
```

- Click on `compare and pull requests` to create a pull request on Github in your forked repo

> ## Guidelines for raising a pull request:
>
> - Each pull request should have an appropriate and short title like "Fixed Bug in Upload Page"
> 
> - Describe your intended changes in the description section of the pull request (Use bullet points and phrases) 
>
> - Refrain from using phrases like "Hi, I am ..", "Please merge me this OPR", "Thank You..", etc. We are only interested in technical parts
>
> - Attach a screenshot/clip of the change(s)
>
> - Make sure to refer the respective issue in the respective PR using phrases like `Resolves #issue_number` or `Closes #issue_number`.  
>
> - Please be patient enough. The project maintainers/mentors would review it as per their schedule. Please do not start putting comments like "Please check this" etc.
>  
> - Although we support feedback from everyone in all phases of development, it is highly advised not to put any negative comments in other participant's pull requests.
> 
> - Always keep a note of the deadline. 


