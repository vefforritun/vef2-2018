Útbúa þarf gagnagrunn og keyra inn gögn í `MOCK_DATA.sql`, t.d.:

```bash
> createdb mock
> psql -d mock -a -f MOCK_DATA.sql
```

Setja þarf `DATABASE_URL` í `app.js`
