
Node aaplication with mongoDb is used here, 
The local machine should have installed and set up npm, node, mongoDb.

After cloned code in to local machine, check out branch in to master using command "git checkout master"

Install all the dependencies using "npm i"

Command "npm start" will start the node application.

Index.js file in routes folder contain path to all apis.

------********* End point and usage ********----------

    /register      - register a user based on the schema designed for user in models folder.
    /user          - Api returns all the registered user's email and name only to display in users list page.
    /user/:userId  - Api returns all details of a particular user.

