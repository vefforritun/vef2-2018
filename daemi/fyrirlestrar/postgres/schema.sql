CREATE TABLE texts(
  id serial primary key,
  name varchar(64) not null,
  text text,
  date timestamp with time zone not null default current_timestamp
);
