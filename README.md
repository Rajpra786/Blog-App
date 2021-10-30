# Blog App : A MERN Stack Application

## Features

- Light and Dark theme (can be added new themes easily)
- Responsive Components
- User Authentication using express sessions
- Direct upload of images to S3 from client
- Profile update page to change user image and other related fields
- Allows to create new blogs using a reach text-editor(Quill) with image drag-drop and copy paste feature

## Tech-Stack

- [NodeJS](https://nodejs.org) - JavaScript runtime built on Chrome's V8 JavaScript engine.
- [MongoDB](https://www.mongodb.com/) - The application data platform: NoSQL Database
- [React](https://reactjs.org/)- for front-end
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [MUI-5](https://mui.com/getting-started/usage/) - Provides a robust, customizable, and accessible library of foundational and advanced components, enabling you to build your own design system and develop React applications faster.
- [Swagger](https://swagger.io/) - Simplify API development for users, teams, and enterprises with the Swagger open source and professional toolset. Find out how Swagger can help you design and document your APIs at scale.
- [AWS-S3](https://aws.amazon.com/s3/) - Object storage built to retrieve any amount of data from anywhere
- [Quill](https://quilljs.com/) -A powerful rich text editor
- [aws-sdk](https://aws.amazon.com/sdk-for-javascript) - To store images to S3
- [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [react-avatar-edit](https://www.npmjs.com/package/react-avatar-edit) - Load, crop and preview avatar with ReactJS component
- [html-react-parser](https://www.npmjs.com/package/html-react-parser) - Parse the blogs html content
- [Heroku](https://dashboard.heroku.com/) - Build data-driven apps with fully managed data services.

## Live Demo

https://blogger-bhaiya.herokuapp.com

## Swagger Documentation

https://blogger-bhaiya.herokuapp.com/doc/

## Run on worlds fasted-server: localhost

1. Clone the repository

```sh
$ git clone https://github.com/Rajpra786/Blog-App.git
```

2. Install the dependencies and start the development server

```sh
cd Blog-App
npm i
npm start
```

3. Install dependencies of client and start client

```sh
cd client
npm i
npm start
```

## What's next? Where you can help?

### Server Side

Check Swagger documentation for API endpoints

##### User related operations

- [x]  Get public profile
- [x] Login, logout and Signup
- [x] Update user profile

##### Blog related operations

- [x] Create new blog
- [x] Get blog by id
- [x] Get blogs based on filters
- [x] Update blog

##### Comments related operations

- [x] Add comment
- [x] Get comments using blog id
- [x] Update comment

##### Other

- [x] Get a S3 temporary link to upload image directly

### Front-end Side

- [x] Home page with responsive elements
- [x] Display a single blog with an id
- [x] Get all blogs
- [x] Get all the blogs of specific category
- [x] Create blog
- [x] Update a blog
- [x] Profile public view
- [x] Update profile
- [x] Update and crop profile photo
- [x] Login, Sign Up, logout
- [x] Dark and light theme
- [ ] Add comment-box for any blog(only when user wants to see the comments)
- [ ] Edit comment
- [ ] Add more themes
- [ ] Add docker file
- [ ] Add Google Login

## License

MIT

**Lets Rock!**
