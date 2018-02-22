# Notendaumsjón með skráningu

Áframhald á [dæmi úr fyrirlestri #5](../../../../05/daemi/auth/passport.js) sem:

* Refactorar kóða til að nota `async await`
* Færir notendaumsjón yfir í postgres grunn
* Bætir við nýskráningu notenda

Til að keyra þarf að setja rétta slóð fyrir `DATABASE_URL` í `.env` og:

```bash
> npm install
> createdb users
> node createdb.js
> node app.js
```

Í byrjun er einn notandi búinn til `admin` með lykilorð `123`. Aðrir notendur verða til í `users` töflu.
