# TEST TASK

I realized url-shortening service tesk task from Avito Tech. You can find link to original below.

Source: <a href="https://github.com/avito-tech/auto-backend-trainee-assignment/blob/master/README.md">Avito Tech Backend</a>

# Developer internship/junior backend test assignment in Auto unit

## Task

You need to make a HTTP service to shorten URLs such as [Bitly] (<https://bitly.com/>) and other services.

UI is not needed, just make a JSON API service.

Must be able to:

- save a short URL representation
- go to the previously saved short presentation and get a redirect to the corresponding original URL

### Requirements

- Programming language: Go/Python/PHP/Java/JavaScript
- Provide instructions on how to launch the app. Ideally (but not necessarily) - use containerization with the possibility of launching a project with the command ['docker-compose up'](https://docs.docker.com/compose/)
- There are no requirements for the technologies used - you can use any database for consistency
- The code needs to be put on github (please do not fork this repository, so as not to generate plagiarism)

### Complications

- Tests are written (try to reach coverage of 70% or more)
- URL validation added with link verification
- Added custom links to make them human-readable - [http://bit.ly/avito-auto-be](http://bit.ly/avito-auto-be)
- Load testing was conducted to understand what reading load our service can withstand
- If you want, you can create a simple UI and transfer the service to a free hosting - Google Cloud, AWS and others.
