# Non-scientific sub-project: "web front-ends, submission management, web drives"

> Henry Kwon

## How it functions

1. File is sent from client to server through Next.JS’ server action
2. Server downloads the file into ./files folder with a random filename generated with crypto.randomUUID
3. Child process starts and randomly generated name is passed into backend.sh as an argument
4. Resulting output to stdout is collected and sent back to client (If error occurred, the error is returned as string to client)
5. Client displays server response in textarea component

## Considerations

- File size limiting: I have two file size limitation logic implemented in code: one in client (buffer.byteLength > MAX_FILE_SIZE) and one in server to block exception cases where user directly requests through custom HTTP client
- Error handling: Since exceptions that occurred in server action are not properly handled in client, I added a custom exception handler by considering null responses as error instead

## Improvements
- At the moment, files are directly stored in the same environment with the server. This is bad practice and must be moved to a separate bucket for isolation.
- To avoid timeouts when bash processes take a longer time, a database and docker images are necessary to track each of the ongoing processes instead of a single request-response chain.
