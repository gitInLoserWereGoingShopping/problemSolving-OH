DROP DATABASE IF EXISTS groceries;
CREATE DATABASE groceries;
USE groceries;
CREATE TABLE groceries (
  id INT AUTO_INCREMENT,
  item VARCHAR(100),
  PRIMARY KEY (id)
);