# DevCamper API

DevCamper is a backend API for a bootcamp directory website, designed to serve as the foundational backend service for future frontend/UI developments. This API handles all operations related to bootcamps, courses, reviews, and user authentication.

## Features

### Bootcamps
- List all bootcamps in the database
- Support pagination, specific field selection, result limiting, and field-based filtering
- Search bootcamps by radius from a given zipcode, utilizing geocoder to derive exact locations
- CRUD operations on bootcamps:
  - Create a new bootcamp (authenticated users with "publisher" or "admin" roles only; one bootcamp per publisher, except for admins)
  - Read a single bootcamp
  - Update existing bootcamp (owner only, with field validation)
  - Delete bootcamp (owner only)
  - Upload a photo for bootcamp (owner only, saved to local filesystem)
  - Calculate the average cost of all courses and average rating from reviews

### Courses
- List all courses for a bootcamp and in general
- Support for pagination, filtering, and other query functionalities
- CRUD operations on courses:
  - Create a new course (authenticated "publisher" or "admin" only; specific owner/admin restrictions apply)
  - Read a single course
  - Update existing course (owner only)
  - Delete a course (owner only)

### Reviews
- List all reviews for a bootcamp and in general
- Pagination and filtering support
- CRUD operations on reviews:
  - Create a review (authenticated "user" or "admin" only; no publishers)
  - Read a single review
  - Update a review (owner only)
  - Delete a review (owner only)

### Users & Authentication
- JWT/cookies based authentication (token and cookie expiration set to 30 days)
- User registration with immediate login via returned token and cookie
- User login and logout functionalities
- Password hashing with functionality for password reset via email and token-based URL
- User profile updates and separate route for password updates
- Admin functionalities to create, update, and delete users
- Security measures including encryption, XSS protection, rate limiting, prevention of NoSQL injections, HTTP param pollution protection, and CORS

## Security

- Encrypt passwords and reset tokens
- Prevent NoSQL injections
- Add headers for security(helmet)
- Prevent cross site scripting - XSS
- Add a rate limit for request of 100 requests per 10 minutes
- Protect against http param pollution
- Use cors to make API public

## Documentation
- Postman for API route testing and documentation
- Docgen for generating HTML documentation files from Postman collections
- Deployed documentation available via the API root route (`/`)

## Deployment
- Push to GitHub and deploy to a Digital Ocean droplet
- Setup using PM2 for process management
- NGINX reverse proxy setup for port 80
- Domain connection and SSL installation via Let's Encrypt

## Quick Start

Clone the repository and install dependencies:
```bash
git clone https://github.com/your-github-username/devcamper-api.git
cd devcamper-api
npm install

## Run the server in development mode:

bash 

npm run dev

Run the server in production mode:

bash

npm start

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.
