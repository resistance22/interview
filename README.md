# React Interview

## Mock API
To start the server run 
```
  npm run server
```
It will server on http://localhost:3000/comment

The server will responsd with and array of objects shaped like this:
```json
    {
      "id": 5, // not null
      "comment": "string", // not null 10 < length < 30
      "title": "Number 4", // not null
      "parent": 3 // null/ | parent id nullable
    }
```

## Your Task
The server won't respond the comments in the right order, but the comments must be sanitized to be shown in the right order, with the parent and child defenition.


