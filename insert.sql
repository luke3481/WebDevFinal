


insert into assignment (assignment_id, assignment_name, due_date) values (1, 'Project', '6/3/22');
insert into assignment (assignment_id, assignment_name, due_date) values (2, 'Final', '6/5/22');
insert into assignment (assignment_id, assignment_name, due_date) values (3, 'HW1', '5/1/22');
insert into assignment (assignment_id, assignment_name, due_date) values (4, 'HW2', '5/27/22');
insert into assignment (assignment_id, assignment_name, due_date) values (5, 'HW3', '6/5/22');


insert into user_assignment (user_id, assignment_id, points, content) values (39, 1, 100, 'good job!');
insert into user_assignment (user_id, assignment_id, points, content) values (39, 2, 90, 'Not bad!');

insert into user_class (user_id, class_id, grade) values (39, 1, 'NA');
insert into user_class (user_id, class_id, grade) values (39, 2, 'NA');


ALTER TABLE user_assignment
ADD teacher_id int;

UPDATE user_assignment
SET teacher_id = 39
where user_id in (1,2);
