CREATE USER 'your_user' @'%' IDENTIFIED BY 'your_password';

GRANT ALL PRIVILEGES ON *.* TO 'your_user' @'%';

FLUSH PRIVILEGES;