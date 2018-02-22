CREATE TABLE users (
  id serial primary key,
  username character varying(255) NOT NULL,
  password character varying(255) NOT NULL
);

INSERT INTO users (username, password) VALUES ('admin', '$2a$11$pgj3.zySyFOvIQEpD7W6Aund1Tw.BFarXxgLJxLbrzIv/4Nteisii');
