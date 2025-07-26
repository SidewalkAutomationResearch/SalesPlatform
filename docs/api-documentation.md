# API Documentation

## Base URL
`https://api.customervault.com/v1`

## Authentication
```http
Authorization: Bearer {access_token}
```

## Endpoints

### Authentication
`POST /auth/login`
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Customers
`GET /tenants/{id}/customers`
```json
{
  "data": [
    {
      "id": "cust_123",
      "name": "Acme Inc",
      "email": "contact@acme.com",
      "healthScore": 85
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100
  }
}
```

### Analytics
`GET /tenants/{id}/analytics/overview`
```json
{
  "totalCustomers": 42,
  "activeCustomers": 35,
  "churnRisk": 0.15,
  "revenue": 125000
}
```

### Error Responses
```json
{
  "error": {
    "code": "invalid_request",
    "message": "Invalid email or password"
  }
}
```

## Rate Limits
- 100 requests per minute
- 1000 requests per hour

## Webhooks
Configure webhooks to receive real-time events:
- customer.created
- customer.updated
- invoice.paid
