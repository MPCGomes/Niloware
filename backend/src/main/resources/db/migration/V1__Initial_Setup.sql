CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

INSERT INTO roles (name) VALUES ('USER'), ('ADMIN');

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(72) NOT NULL,
    birthdate DATE NOT NULL,
    username VARCHAR(16) UNIQUE NOT NULL,
    role_id INT,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id)
);
