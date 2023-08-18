CREATE TABLE courses (
    code INTEGER PRIMARY KEY AUTO_INCREMENT,
    course_title VARCHAR(200) NOT NULL,
    course_description VARCHAR(300) NOT NULL,
    done BOOL NOT NULL DEFAULT 0,
    createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);