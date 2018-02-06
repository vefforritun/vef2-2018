# Að tengjast postgres

Þegar við höfum sett upp postgres á vélinni okkar gætum við lent í vandræðum við að tengjast. Helst er það tengt auðkenningu okkar við postgres. Tek það fram að ég (Óli) er engin sérfræðingur í notendaumsjón postgres gagnagrunna.

## Notendur í postgres

Í byrjun er einn notandi uppsettur, annað hvort með notendanafnið `postgres` eða nafn þess notanda sem skráður er inn (t.d. `osk`)

* Á windows er beðið um lykilorð fyrir `postgres` notanda í uppsetningu
* Á linux er `postgres` notandi til staðar en það er ekki hægt að tengjast með honum
* Á mac, ef postgres er sett upp með `brew install postgresql` heitir notandinn sama og innskráður notandi

Til þess að tengjast er hægt að nota `psql` CLI forrit:

```bash
> psql -d postgres
# eða
> psql <username> -h 127.0.0.1 -d postgres
# eða
> psql username -h localhost -d postgres
```

Þá er hægt að athuga hvaða notendur eru til staðar:

```bash
postgres=# \du
                                   List of roles
 Role name |                         Attributes                         | Member of
-----------+------------------------------------------------------------+-----------
 osk       | Superuser, Create role, Create DB, Replication, Bypass RLS | {}
 ```

Þá getum við útbúið gagnagrunn (t.d. `v2`) og notanda (t.d. `notandi`) fyrir grunninn sem við vitum að hefur aðgang:

 ```bash
postgres=# create user notandi;
CREATE ROLE

postgres=# create database v2;
CREATE DATABASE

psql=# grant all privileges on database v2 to notandi;
GRANT
```

Við getum þá hætt í psql og loggað okkur aftur inn sem nýr notandi, búið til töflu og bætt við hana:

```bash
psql=# \q
> psql -U notandi -d v2
psql=# CREATE TABLE test (
  id serial primary key,
  text varchar(64) not null
);
CREATE TABLE
postgres=> INSERT INTO test (text) VALUES ('foo');
INSERT 0 1
postgres=> SELECT * FROM test;
 id | text
----+------
  1 | foo
(1 row)
```

Ef við tengjumst nú frá node þurfum við að byrja á útbúa möppu og sækja `pg` pakkann:

```bash
> cd postgres-test
> npm init -y
> npm install pg --save
```

Ef við búum nú til skrá `index.js`:

```javascript
const { Client } = require('pg')

const connectionString = 'postgres://notandi:@localhost/v2';

const client = new Client({ connectionString });
client.connect();

client.query('SELECT * FROM test;', (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.rows);
  }

  client.end();
});
```

og keyrum:

```bash
> node index.js
[ anonymous { id: 1, text: 'foo' } ]
```

Við höfum [nokkrar leiðir til að tengjast postgres](fyrirlestrar/03/03.2.postgres.md#tengjast-gagnagrunni) en kosturinn við að nota tengistreng (_connection string_) er að við notum þannig þegar við setjum upp gagnagrunn á Heroku. Tengistrengur að ofan er jafngildur eftirfarandi, þar sem [tengistrengur er URI](fyrirlestrar/03/03.1.http.form.md#url) (þar sem eftir skema kemur `username:password@`):

```javascript
const client = new Client({
  user: 'notandi',
  host: 'localhost',
  database: 'v2',
  password: '',
})
```

Lentir þú í frekari vandræðum og fannst út úr þeim? Bættu veseni og lausn við með pull request eða láttu Óla vita á slack.
