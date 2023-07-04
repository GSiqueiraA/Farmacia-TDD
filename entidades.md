## Cliente:

### Atributos:
#### id (string): ID único do cliente (gerado usando UUID).
#### login (string): Nome de login do cliente.
#### password (string): Senha do cliente (armazenada após ser encriptada ou hasheada).

## Produto:

### Atributos:
#### id (string): ID único do produto (gerado usando UUID).
#### nome (string): Nome do produto.
#### preco (number): Preço do produto.
#### quantidade (number): Quantidade disponível em estoque do produto.

## Usuário:

### Atributos:
#### id (string): ID único do usuário (gerado usando UUID).
#### login (string): Nome de login do usuário.
#### password (string): Senha do usuário (armazenada após ser encriptada ou hasheada).

## Atendente:

### Atributos:
#### id (string): ID único do atendente (gerado usando UUID).
#### nome (string): Nome do atendente.
#### usuarioId (string): ID do usuário associado ao atendente.

## Estoque:

### Atributos:
#### id (string): ID único do estoque (gerado usando UUID).
#### produtoId (string): ID do produto associado ao estoque.
#### quantidade (number): Quantidade disponível em estoque do produto.
