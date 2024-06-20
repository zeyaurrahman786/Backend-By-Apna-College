USE college;

CREATE TABLE student(
	rollno INT PRIMARY KEY,
    name VARCHAR(30),
    city VARCHAR(30),
    marks INT
);


INSERT INTO student
(rollno, name, city, marks)
VALUES 
(110, "Adam", "Delhi", 76),
(105, "Bob", "Mumbai", 65),
(124, "Casey", "Pune", 94),
(112, "Duke", "Pune", 80);


SELECT * FROM student;


SELECT * FROM student
WHERE marks > 75;


SELECT DISTINCT city
FROM student;


SELECT city
FROM student
GROUP BY city;


SELECT city, max(marks)
FROM student
GROUP BY city;



SELECT avg(marks)
FROM student;



ALTER TABLE student
ADD COLUMN grade VARCHAR(2);



SET SQL_SAFE_UPDATES = 0;

UPDATE student
SET grade = "O"
WHERE marks >= 80;


UPDATE student
SET grade = "A"
WHERE marks >= 70 AND marks < 80;


UPDATE student
SET grade = "B"
WHERE marks >= 60 AND marks < 70;

SELECT * FROM student;