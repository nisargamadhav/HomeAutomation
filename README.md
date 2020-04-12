# Home Automation

# Introduction

Build a Home Automation system to remotely control devices at home. Expose a set of RESTful APIs to control the smart devices remotely. 
Build a web console through which one can control and manage the entire system.
To talk to devices mimic one or more libraries that just logs the action it performed. 

##Scenarios
- List all smart devices
- Add new smart device
- Perform an operation on a device 
- Remove an installed device


## What you should install?

MERN (MongoDB, Express.js, React.js, and Node.js) technology is used.

Firstly, you should install

-   [Mongo](https://www.mongodb.com/) 4.0.4+
-   [ExpressJS](https://expressjs.com/) 4.16.3+
-   [ReactJS](https://reactjs.org/) 16.5.0+
-   [Node](https://nodejs.org/en/) 11.4.0+ (It's recommended to use 10.15.1 LTS)

## Download


```
$ git clone https://github.com/nisargamadhav/HomeAutomation.git
```

## Configuring App

If you have all the prerequisites installed you should verify if your MongoDB is up.

```
$ cd HomeAutomation
$ cd server
$ npm install
$ nodemon index.js
```

```
$ cd HomeAutomation
$ cd client
$ npm install
$ npm start
```