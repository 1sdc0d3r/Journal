# Workflow

## Features

| Feature        | Method | URL                |
| :------------- | :----: | :----------------- |
| Register User  |  POST  | /api/auth/register |
| Login User     |  GET   | /api/auth/login    |
| Logout User    |  GET   | /api/logout        |
| Create Post    |  POST  | /api/post          |
| Get Posts      |  GET   | /api/post          |
| Get Post by Id |  GET   | /api/post/:id      |
| Modify Post    |  PUT   | /api/post/:id      |
| Delete Post    | DELETE | /api/post/:id      |

## Users

-id
-name
-Creation date

## Posts

-id
-name

## Testing

- functions: invoke the function with optional arguments => check return

- endpoints: make a request with optional arguments => check response
