# Olisaude Back-end Challenge

Project develop to complete the Back-end Challenge made by Olisaude.

## Installation and execution

* `git clone https://github.com/devEdu-web/olisaude-backend-challenge.git`;
* `cd ./olisaude-backend-ballenge`;
* `npm install`
* `npm run dev`
  
***
## Endpoints

### Create new client
```typescript
POST -> `/clients/new` 

REQUEST_BODY -> {
  name: string,
  birth_date: Date ('March 25, 2022'),
  sex: string ('F | M'),
  health_problems: [
    {name: string, degree: number}
  ]
}

```
### Get clients
```typescript
GET -> `/clients/all`
```

### Update clients
```typescript
PUT -> `/clients/update/${client_id}`

REQUEST_BODY -> {
  name: string,
  birth_date: Date ('March 25, 2022'),
  sex: string ('F | M'),
}

// Note: Health Problems are update separately.
```

### Get 10 clients of most health risk
```typescript
GET -> `/clients/high_risk`
```

### Update client's health problems
```typescript
PUT `/health_problems/update/${health_problem_id}`

REQUEST_BODY -> {
  name: string,
  degree: number
}
```

***