/*

1. GitHub - Version Control / Code Storage - 

Github - why code storage github?

User 1 - Architect - base framework 1.0
User2,3,4 - Want to use this base framework and develop automation scripts

====
User1 pushes the entire base framework - (main / master) branch
====
Suppose each and every different pages task distured to different users. For eg: 

User 2 - having task to write test to login 
User 3 - having task to write test add to cart
User 4 - having task to write test to Checkout
====
whichever user 2/3/4 - is going to write test cases they will be taking the clone.
Clone of master branch - giveName to branch -> 
user 2 will work on login page, user 3 will work on add to cart, user 4  will work on checkout.(different - different pages)
====
Everyone wants to maintain this repo whenever we are creating a new code or anything, that has to be reviewed by someone in team in the team before merging with the master branch. So, there comes the Pull request.

Pull request(PR)

User 2, 3, 4 will raise a PR for their branch towards master branch (development branch)

User 1 - will review each PR and if there is no commands User 1 will merge from others user
------

Master/ main > Branch with good code quality (1.1 / 1.x) (Because there is a review process involved)
User 2, 3, 4 will working -> that branch is called as development branch, where we will be developing test cases for each other. Each user will have a different level branch and they will be raising PR towards the master branch. After te review process only, we will be sending the changes to the Master branch. (Github - that's why Github is called Code Storage).
====

Version control (Azure devops, Gitlab, bitbucket) -

Master/ main > Branch with good code quality (1.1 / 1.x)
For each and every new code merged inside our Github repository, terms are Version Control.
Github is a version control tool, we create ->

Repository, 
Create a master branch
Create dev branch -> by cloning master -> commit whatever change we developing in local
Create a PR
Senior People will review PR and give comments
After PR approval
Code will be merged to master branch

======================================================================

2. CI/CD (Continuous Integration / Continuous Delivery)

Why we automtion in our project??

To reduce the manual efforts and trying to fast the delivery cycle.

In Agile World - one concept - CI/CD - to 

For Eg:

https://www.google.com/search?sca_esv=3eba2a93d87aa6a5&rlz=1C1CHZN_enIN945IN945&sxsrf=APpeQnuWXXgCsWWi9cpK2dq9noFrAQcd5A:1789314871038&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8cqCQj_06QnZs315LoFmPf5bBLHMJ0vMQmTbuI72DM7jn1PTmby9t4tumVo2l1imA7zXzUtWBynCWWtqkX5F_1Sa3ahzGropv4-sQ_DAn7xVtLjFun5JjBPxMmMqRN8PyahHvTBWY3YU-2GXEqfAdM20hRmyGAM3ktWdztrYB_DknMAuWiRdQXtGchv5BYT9YZEYq2Sg&q=5+min+CI/CD&sa=X&ved=2ahUKEwj-7p2q9euWAxWlVkEAHcREJ-wQtKgLegQIFRAB&biw=1366&bih=607&dpr=1#sv=CAMSURoyKhBlLWp2N3N3M0lRdkZPdGZNMg5qdjdzdzNJUXZGT3RmTToOSG0xWldzX2lFRUtabE0gBCoXCgFzEhBlLWp2N3N3M0lRdkZPdGZNGAEwARgHIL-P4oACSggQARgBIAEoAQ


CI - Every time code is pushed, it's automatically built and tested.Catches bugs
early - Did this new changes break anything?

CD - Once tests pass, the code is automatically pushed toward stagging or production.

Build -> Test -> Deploy (without a human manually doing each step)

QA - Instead of Manually running regression tests, CI/CD triggers them automatically on every
code change-this is the backbone of automation's real value.

QA - Test part in CI/CD
(we will run the automation existing regression pack, we will run the test and
 we will check whether the build is stable or not. And then we will do it manually and 
 then we will release it to the production, in real time.)

 ======================================================================

 3. Jenkins - The CI/CD Tool (orchestrator)

 CI/CD - Process
 Jenkins - is a tool to help achieve the CI/CD Proces.

 (Help us from Planning phase to the release phase till the deployment phase)

 Jenkins is the place where the CI/CD pipeline will run and it will help us to build and test it.
 It will build the project code and it will run playwright test on the web application or API layer.
 and it will give the report whether pass or fail.
 If all the cases quality checks are passes, we will be doing the deployment.

 1. Github (code / automation script written -> is pushed -> maintain in the Github respository)
 
 2. CI/CD

 3. Jenkins tool ( we will create a pipeline and then we will be pulling the code / automation code
 from the Github, and we will be writing the running the automation execution on Jenkins, and then
 we will also showcase the report - Pass / failure reports inside the jenkins).


 ========
 Github

 …or create a new repository on the command line
echo "# PlayWrightBatchDemo_July" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/sharmapreeti097/PlayWrightBatchDemo_July.git
git push -u origin main

…or push an existing repository from the command line

git remote add origin https://github.com/sharmapreeti097/PlayWrightBatchDemo_July.git
git branch -M main
git push -u origin main

*/