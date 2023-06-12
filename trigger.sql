CREATE TABLE cliente (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(16) not NULL,
  sobrenome VARCHAR(24) not NULL,
  idade INT,
  pais VARCHAR(4)
);

CREATE TABLE pedido (
  ID SERIAL PRIMARY KEY,
  item VARCHAR(48) NOT NULL,
  quantidade INT NOT NULL,
  fk_id_cliente INT NOT NULL,
  CONSTRAINT fk_cliente FOREIGN KEY (fk_id_cliente) REFERENCES cliente(id)
  on DELETE CASCADE
);

INSERT INTO cliente (nome, sobrenome, idade, pais) VALUES
  ('JoÃ£o', 'Alves', 48, 'BR'),
  ('Roberto', 'Garcia', 36, 'MX'),
  ('Dario', 'Rubens', 39, 'ARG'),
  ('Julia', 'Lopes', 28, 'PE'),
  ('Rebeca', 'Giglio', 54, 'IT');
  
INSERT INTO pedido (item, quantidade, fk_id_cliente) VALUES
  ('teclado', 1, 4),
  ('mouse', 2, 4),
  ('monitor', 8, 3),
  ('teclado', 1, 1),
  ('mousepad', 4, 2);
CREATE OR REPLACE FUNCTION verificar_quantidade() RETURNS TRIGGER AS $$
BEGIN
  IF NEW.quantidade > 5 THEN
    RAISE NOTICE 'A quantidade do item excede 5 unidades!';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_verificar_quantidade
BEFORE INSERT ON pedido
FOR EACH ROW
EXECUTE FUNCTION verificar_quantidade();