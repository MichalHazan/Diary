-- create database Restaurant;

-- use Restaurant;
-- create table customers(
-- 	id int auto_increment,
-- 	name varchar(35),
--     membership bool default 0,
--     primary key(id)
-- );

-- create table menu(
-- 	id int auto_increment,
-- 	name varchar(35),
--     price float,
--     img text default "https://w7.pngwing.com/pngs/487/793/png-transparent-computer-icons-lunch-dinner-dish-hot-food-eating-bread-menu.png",
--     primary key(id)
-- ); 

-- create table orders(
-- 	id int auto_increment,
-- 	user_id int, 
--     dish_id int,
--     qt int default 1,
--     created datetime default now(),
--     primary key(id),
--     foreign key(user_id) references customers(id),
--     foreign key(dish_id) references menu(id)
-- ); 

-- insert into customers(name , membership)
-- values('jo', 1),
-- ('johana', 1),
-- ('johnny', 0),
-- ('joniel', 0),
-- ('jenny', 1),
-- ('johnniahoo', 1);

-- insert into menu(name , price)
-- values('Pizza', 25.9),
-- ('Pasta', 56),
-- ('Salad', 65),
-- ('Fish', 107),
-- ('Sushi', 81),
-- ('Rib eye', 80),
-- ('Burger', 50.9);

-- insert into orders(user_id, dish_id )
-- values(3, 3),
-- (1, 5),
-- (3, 2),
-- (6, 7),
-- (2, 7),
-- (6, 3),
-- (4, 5),
-- (4, 5);

-- SELECT customers.name as cutomer, customers.membership,
-- menu.name as dish, menu.price, menu.img,
-- orders.qt, orders.created
-- FROM restaurant.orders
-- inner join customers on orders.user_id = customers.id
-- inner join menu on orders.dish_id = menu.id
-- where customers.name in ("johana","johnniahoo")
-- ;

SELECT customers.name as customer,
        customers.membership,
        menu.name as dish,
        menu.price,
        menu.img 
        FROM orders
        inner join customers on orders.user_id = customers.id
        inner join menu on orders.dish_id = menu.id
        where orders.user_id =3;