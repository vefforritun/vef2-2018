CREATE TABLE texts(
  id serial primary key,
  text text,
  date timestamp with time zone not null default current_timestamp
);

CREATE TABLE students(
  id serial primary key,
  name varchar(64) not null,
  date timestamp with time zone not null default current_timestamp
  graduated boolean NOT NULL DEFAULT false,
);
