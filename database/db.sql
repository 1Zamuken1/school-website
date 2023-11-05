CREATE TABLE courses (
    code INTEGER PRIMARY KEY AUTO_INCREMENT,
    course_title VARCHAR(200) NOT NULL,
    course_description VARCHAR(300) NOT NULL,
    done BOOL NOT NULL DEFAULT 0,
    createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id INTEGER NOT NULL PRIMARY KEY,
    range VARCHAR(50) NOT NULL,
    email VARCHAR(200) NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(200) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE advertisements (
    code INTEGER PRIMARY KEY AUTO_INCREMENT,
    advertisement_title VARCHAR(200) NOT NULL,
    advertisement_description VARCHAR(500) NOT NULL,
    createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);