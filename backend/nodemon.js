// solves crashing error w/nodemon where constantly has port 8080 (server) "in use"
{
  "events": {
    "crash": "sh -c 'lsof -i :8080 -t | xargs kill'"
  }
}