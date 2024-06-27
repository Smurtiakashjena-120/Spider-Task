#acessing the database
USE inventoryDB; 

#its a comment
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL,
    category VARCHAR(255) NOT NULL
);

#inserting the values;
INSERT INTO products (name, description, price, quantity, category) VALUES
('Mouse', 'A wireless mouse for laptop.', 1000.00, 50, 'Electronics'),
('Chair', 'a luxurious wooden table', 149.99, 200, 'Furniture'),
('Headphones', 'headphones with noise cancellation.', 799.99, 75, 'Electronics'),
('Shoes', 'shoes for everyday jogging.', 499.99, 150, 'Sportswear'),
('laptop', 'HP laptop,intel 7', 100000.99, 10, 'Electronics');

#retrive all product ;
select * from products;

#retrive under a specific amount

select * from products 
where price < 500 ;

# retrive via stocks

select * from products 
where quantity > 149 ;


#updating a row in the table

update products
set price = 1000
where quantity = 150 ;