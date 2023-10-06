# BankofCanada

### Summary

Bank of Canada (BC) is a banking web application that runs on any browser. It has a user interface that will allow users to track their past expenses, add and transfer money between different accounts.

1. After signing in, a webpage interface will show up the signed-in account remaining balance and show the past expense record so that account owners can keep track of their spending.
2. In the web interface will have an option for people to transfer their money to a different account
3. The server will have a way to accept transaction records and update related account balances based on the information stored in the records.
4. Server can handle more than 500 users usage at the same time or 500 transaction records within 1 minute

### Technologies

MERN tech stack (MongoDB, ExpressJS, ReactJS and NodeJS) with GitHub Actions and Docker
Supporting Node.js versions: 14.x, 16.x, 18.x


###  How to Run
Run backend:
cd into the back-end folder first. Inside the back-end folder, type "npm install" then "npm start" to run it

Run frontend:
cd into the front-end folder. If you don't have node_modules in that folder, run "npm install" on the terminal to install the dependencies. Run "npm start" to start the front-end server. The server will run on localhost:3000. 

Login into an account:
When you first log in into the website, you will be on the home page. You will be defaultly logged into Elon Musk's account (elonmusk@twitter.com). If you want to login with a different account, go to the sidebar on the left and click on Authentication => Login. Here you will be redirected to the login page where all you need to do is type in a user's email to log in to their account.

User Expense Table Colors:
You may wonder what the colored squares on the user's expense table on the home page means. The colored squares correspond to the price of the expense it is next to. 
    - Green means the transactions is $10 or less
    - Yellow means it is between $10 to $50
    - Red means it is higher than $50

Send Transactions record using postman:
download postman
Start the backend


