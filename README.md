# Flask React Project

This is the starter for the Flask React project.

## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

## Deploy to Heroku

1. Before you deploy, don't forget to run the following command in order to
ensure that your production environment has all of your up-to-date
dependencies. You only have to run this command when you have installed new
Python packages since your last deployment, but if you aren't sure, it won't
hurt to run it again.

   ```bash
   pipenv lock -r > requirements.txt
   ```

2. Create a new project on Heroku
3. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
4. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
5. Run

   ```bash
   heroku login
   ```

6. Login to the heroku container registry

   ```bash
   heroku container:login
   ```

7. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.
   This should be the full URL of your Heroku app: i.e. "https://flask-react-aa.herokuapp.com"
8. Push your docker container to heroku from the root directory of your project.
   (If you are using an M1 mac, follow [these steps below](#for-m1-mac-users) instead, then continue on to step 9.)
   This will build the Dockerfile and push the image to your heroku container registry.

   ```bash
   heroku container:push web -a {NAME_OF_HEROKU_APP}
   ```

9. Release your docker container to heroku

      ```bash
      heroku container:release web -a {NAME_OF_HEROKU_APP}
      ```

10. set up your database

      ```bash
      heroku run -a {NAME_OF_HEROKU_APP} flask db upgrade
      heroku run -a {NAME_OF_HEROKU_APP} flask seed all
      ```

11. Under Settings find "Config Vars" and add any additional/secret .env
variables.

12. profit

### For M1 Mac users

(Replaces **Step 8**)

1. Build image with linux platform for heroku servers. Replace
{NAME_OF_HEROKU_APP} with your own tag:

   ```bash=
   docker buildx build --platform linux/amd64 -t {NAME_OF_HEROKU_APP} .
   ```

2. Tag your app with the url for your apps registry. Make sure to use the name
of your Heroku app in the url and tag name:

   ```bash=2
   docker tag {NAME_OF_HEROKU_APP} registry.heroku.com/{NAME_OF_HEROKU_APP}/web
   ```

3. Use docker to push the image to the Heroku container registry:

   ```bash=3
   docker push registry.heroku.com/{NAME_OF_HEROKU_APP}/web
   ```




**User Story**
As a Project Manager, I want to see a completed Readme file so that I can understand more about your project.
**Acceptance Criteria**
- [ ] Readme located at the root of your project has been updated with info from the wiki.
See https://github.com/adamLovettApps/JamOut/blob/main/README.md for an example.



***Replace default favicon File***
**User Story**
As a Project Manager, I want to see an updated favicon so that I can easily identify your application in a list of tabs.
**Acceptance Criteria**
- [ ] Favicon has been updated from the default icon provided by the project starter. See https://www.favicon-generator.org/ for a simple favicon generator



***Deploy for the first time***
**User Story**
As a Developer, I want to deploy my starter app to Heroku so that I can make sure I can deploy changes consistently.
**Acceptance Criteria**
- [ ] The cloned starter app has been deployed to Heroku.



***Create About Links on the Home Page***
**User Story**
As a Developer, I want to display links to my GitHub and LinkedIn profiles so that prospective hiring managers can learn more about me after looking at my project.
**Acceptance Criteria**
- [ ] Links to your LinkedIn and GitHub profiles should appear on the homepage of your application



***Sign Up Functionality***
**User Story**
As a User, I want to create an account so I can use the website.
**Acceptance Criteria**
- [ ] A link/button appears in the navigation for Sign Up (only when not already logged in)
- [ ] When clicking the link/button the user is redirected to a sign up form.
- [ ] After filling out the form and clicking a Submit button an account is created.
- [ ] A message is displayed to the user indicating that the account has been created. (optional)
- [ ] The user is redirected to an appropriate page (determined by the developer)
- [ ] The user has some indication that the user is now logged in.



***Login Functionality***
**User Story**
As a User, I want to login with my previously created account so I can use the website.
**Acceptance Criteria**
- [ ] A link/button appears in the navigation for Log In (only when not already logged in)
- [ ] When clicking the link/button the user is redirected to a login form.
- [ ] After filling out the form with username and password and clicking a Login button the user is logged in.
- [ ] A message is displayed to the user indicating that the user has successfully logged in (optional)
- [ ] The user is redirected to an appropriate page (determined by the developer)
- [ ] The user can visually identify they’ve been logged in by having their username displayed in the navigation bar.



***Error handling Complete***
**User Story**
As a Developer, I want to validate the LogIn/Signup forms being submitted so my users have a good experience when using my application.
**Acceptance Criteria**
- [ ] (Log In) If the username/password combination is wrong, or the user does not exist the login fails.
- [ ] (Log In) A message is displayed to the end user indicating which fields are invalid.
- [ ] (Sign Up) If the username/email already exists, the signup form fails
- [ ] (Sign Up) A message is displayed to the end user indicating which fields are invalid.









***Logout Functionality Complete***
**User Story**
As a Logged In User, I can log out of my account so I can ensure it isn’t used without my permission.
**Acceptance Criteria**
- [ ] A link/button appears in the navigation for Log Out (only when logged in)
- [ ] When clicking this button/link the session ends and the user is logged out.
- [ ] When refreshing the page or traveling to other pages the user does not appear to be logged in
- [ ] The logged out user can log in with a separate account without issue.



***Demo Login Functionality Complete***
**User Story**
As a Project Manager, I can use a Demo Account so that I can use the application without having to use the signup form.
**Acceptance Criteria**
- [ ] A link/button appears in the navigation form and/or Login Form titled “Demo Login”  (only when logged out)
- [ ] When clicking this button/link the user is automatically logged in as a Demo User (a previously created account for testing) without the need to fill out the signup/login form.
- [ ] The user is redirected as if they successfully completed the Log In form.



***Auth Styling Complete***
**User Story**
As a User, I would like to see at least basic styling on the signup and login forms so that the application doesn’t appear too similarly to the default application provided.
**NOTE**: Specific style choices are up to you. But use common sense given your time, ability and wireframes.
**Acceptance Criteria**
- [ ] Sign up and Login forms have been styled appropriately.




**User Story**
As a guest, I should be able to log into the site via a log in form, or sign up for either a user or tasker account with the sign up form
**Acceptance Criteria**
[] There is a button to the page on the nav bar
[] There are validators for the form
[] There is a submit button
[] There is a link to login if already signed up

**User Story**
As a guest, I should be able to view a splashpage that exhibits a glimpse into the site's features
**Acceptance Criteria**
[] Display a banner with a search bar for starting the main form
[] Display 8 example task projects taht each link to the form for that task
[] Display a banner describing the site and its ease of access
[] Display featured taskers
[] Display high-end user Reviews

**User Story**
As a guest or user, I should have access to a navigation bar
**Acceptance Criteria**
[] Contains a services link to a page with all services
[] Contains a log in/sign up button
[] Contains a 'become a tasker' button

**User Story**
As a guest or user, I should be able to view a page of the availibile services
**Acceptance Criteria**
[] Contains a list of all categories to ask help for

**User Story**
As a logged in user, I should be able to start a search for taskers by searching for a class of task to initiate a form for
Upon searching, I should be presented a list of taskers in my area who are suitible for completeing the task.
Only availbable taskers will be displayed by date.
They can be filtered by Price range, and sorted by rating, price, and number of tasks
**Acceptance Criteria**
[] The user will choose their task from a list and enter a description of their task
[] After submitting the above criteria, a list of taskers and their stats will be displayed, containing their reviews, number of tasks, and a button to book them
[] I can view a filter feature as well as a sort-by feature
[] After Selecting a tasker, I can set a date and time for them to fulfill the task
[] I can confirm the tasking appointment on a final page


**User Story**
As a logged in tasker, I should be able to set my profile picture, name, and which tasks and times i'm available for
**Acceptance Criteria**
[] The tasker will have an edit button with AWS enabled for profile picture
[] The tasker will have an edit button for changing their Profile information such as name and email
[] The tasker will have an edit buttonf or changing availibility
