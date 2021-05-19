# Workflow

## Features

| Feature        | Method | URL                |
| :------------- | :----: | :----------------- |
| Register User  |  POST  | /api/auth/register |
| Login User     |  GET   | /api/auth/login    |
| Create Post    |  POST  | /api/post          |
| Get Posts      |  GET   | /api/post          |
| Get Post by Id |  GET   | /api/post/:id      |
| Modify Post    |  PUT   | /api/post/:id      |
| Delete Post    | DELETE | /api/post/:id      |

## Users

-Id
-Creation date
-First Name
-Last Name
-Email
-Username
-Password

## Posts

-Id
-Creation date
-Modification date
-custom entries
-Description

## Testing

- functions: invoke the function with optional arguments => check return

- endpoints: make a request with optional arguments => check response

## TODO

- Login errors for username and password separate
- settings delete user (clear message)
