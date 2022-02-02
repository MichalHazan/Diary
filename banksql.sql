-- create database Banksql;

use Banksql;

-- CREATE TABLE Types (
--     id INT AUTO_INCREMENT,
--     type VARCHAR(35),
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE Actions (
--     id INT AUTO_INCREMENT,
--     amount int,
--     type_id int,
--     date datetime default now(),
--     PRIMARY KEY (id),
--     foreign key(type_id) references Types(id)
-- );

-- insert into Types(type)
-- values('Income'),
-- ('Expense');

-- insert into Actions(amount , type_id)
-- values(1500, 1),
-- (-700, 2),
-- (18000, 1),
-- (-555, 2),
-- (900, 1),
-- (-150, 2)
-- ;

-- SELECT Actions.amount , Actions.date,
-- Types.type
-- FROM Actions
-- inner join Types on Actions.type_id = Types.id
-- ;

select sum(amount) from actions
