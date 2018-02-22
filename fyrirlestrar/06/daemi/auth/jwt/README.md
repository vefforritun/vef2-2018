# Auðkenning með JWT

Áframhald af [skráningardæmi](../register) sem nýtir sama gagnagrunn en býður upp á vefþjónustu sem nýtir JWT til auðkenningar.

Til að auðkenna þarf að senda `POST` á `http://localhost:3000` með JSON sem inniheldur `username` og `password` fyrir notanda. Ef notandi og lykilorð eru rétt er `jwt token` skilað, annars koma villuskilaboð.

Til að keyra þarf að setja rétta slóð fyrir `DATABASE_URL` og `JWT_SECRET` í `.env`.

```bash
> npm install
> node app.js
> curl -H "Content-Type: application/json" -d '{"username": "admin", "password": "123"}' http://localhost:3000/login
{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTE5MjU2NDkzLCJleHAiOjE1MTkyNTY1MTN9.5mArJhUdr6fAPQQT1i0f6CgIY_-iO_Oa5odgRkEOJRY"}
```
