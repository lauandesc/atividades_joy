CREATE DATABASE Joy;
USE Joy;
CREATE TABLE Tabela1 (
  id INT PRIMARY KEY,
  nome VARCHAR(50),
  idade INT,
  email VARCHAR(100),
  telefone VARCHAR(15)
);
INSERT INTO Tabela1 (id, nome, idade, email, telefone)
VALUES
  (1, 'João', 25, 'joao@example.com', '(99) 9999-9999'),
  (2, 'Maria', 30, 'maria@example.com', '(88) 8888-8888'),
  (3, 'Pedro', 35, 'pedro@example.com', '(77) 7777-7777'),
  (4, 'Ana', 28, 'ana@example.com', '(66) 6666-6666'),
  (5, 'Carlos', 32, 'carlos@example.com', '(55) 5555-5555');
  CREATE TABLE Tabela2 (
  id INT PRIMARY KEY,
  endereco VARCHAR(100),
  cidade VARCHAR(50),
  estado VARCHAR(50),
  cep VARCHAR(10)
);
INSERT INTO Tabela2 (id, endereco, cidade, estado, cep)
VALUES
  (1, 'Rua A, 123', 'São Paulo', 'SP', '01234-567'),
  (2, 'Avenida B, 456', 'Rio de Janeiro', 'RJ', '98765-432'),
  (3, 'Rua C, 789', 'Curitiba', 'PR', '54321-876'),
  (4, 'Avenida D, 987', 'Salvador', 'BA', '65432-109'),
  (5, 'Rua E, 654', 'Porto Alegre', 'RS', '21098-765');
  SELECT Tabela1.nome, Tabela1.email, Tabela2.cidade
FROM Tabela1
INNER JOIN Tabela2 ON Tabela1.id = Tabela2.id;



