# Use Cases

## Criar Usuário

### Fluxo Principal
1. O sistema recebe os dados de login e senha do usuário.
2. O sistema gera um ID único (UUID) para o usuário.
3. O sistema encripta a senha do usuário.
4. O sistema cria um novo usuário com o ID, login e senha encriptada.
5. O sistema retorna o usuário criado.

### Fluxo Alternativo - Senha Fraca
1. O sistema recebe os dados de login e uma senha fraca do usuário.
2. O sistema retorna um erro informando que a senha não atende aos critérios de segurança.

### Fluxo Alternativo - Login Inválido
1. O sistema recebe um login inválido (por exemplo, vazio ou contendo caracteres inválidos).
2. O sistema retorna um erro informando que o login é inválido.


## Realizar Login

### Fluxo Principal:
O cliente insere seu nome de login e senha.
O sistema verifica as informações de login e senha do cliente.
Se as informações forem válidas, o sistema autentica o cliente.

### Fluxo Alternativo:
Se as informações de login e senha forem inválidas, o sistema exibe uma mensagem de erro.


## Adicionar Produto

### Fluxo Principal:
O atendente realiza o login no sistema.
O atendente seleciona a opção de adicionar produto.
O sistema solicita as informações do novo produto (nome, preço e quantidade).
O atendente insere as informações do produto.
O sistema registra o novo produto no estoque.

### Fluxo Alternativo:
Se houver campos em branco ou informações inválidas, o sistema exibe uma mensagem de erro.


## Vender Produtos Localmente

### Fluxo Principal:
O atendente realiza o login no sistema.
O atendente seleciona a opção de registrar venda.
O sistema exibe a lista de produtos disponíveis.
O atendente seleciona os produtos vendidos e informa a quantidade de cada produto.
O sistema verifica se há estoque suficiente dos produtos selecionados.
Se houver estoque suficiente, o sistema registra a venda e atualiza o estoque dos produtos vendidos.

### Fluxo Alternativo:
Se não houver estoque suficiente, o sistema exibe uma mensagem de erro.


## Vender Produtos Remotamente

### Fluxo Principal:
O cliente realiza o login no sistema.
O cliente seleciona o produto que deseja.
O sistema exibe a lista de produtos disponíveis.
O cliente seleciona os produtos a serem comprados e informa a quantidade de cada produto.
O sistema verifica se há estoque suficiente dos produtos selecionados.
Se houver estoque suficiente, o sistema registra a venda e atualiza o estoque dos produtos vendidos.

### Fluxo Alternativo:
Se não houver estoque suficiente, o sistema exibe uma mensagem de erro.
