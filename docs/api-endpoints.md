# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Reviews

- `GET /api/reviews`
- `POST /api/reviews`
- `GET /api/reviews/:id`
- `PATCH /api/reviews/:id`
- `DELETE /api/reviews/:id`

### Businesses

- `GET /api/businesses`
- `POST /api/businesses`
- `GET /api/businesses/:id`
- `DELETE /api/businesses/:id`
- `GET /api/businesses/:id/reviews`
  - index of all reviews   for a business
