# Funcionalidade: Criar Usuário

## Cenário: Criar um novo usuário com sucesso
Dado que o usuário informa um login válido
E a senha atende aos critérios de segurança
Quando o usuário é criado
Então o sistema retorna o usuário criado

## Cenário: Tentar criar um usuário com uma senha fraca
Dado que o usuário informa um login válido
E a senha é considerada fraca
Quando o usuário é criado
Então o sistema retorna um erro informando que a senha é fraca

## Cenário: Tentar criar um usuário com um login inválido
Dado que o usuário informa um login inválido
E a senha atende aos critérios de segurança
Quando o usuário é criado
Então o sistema retorna um erro informando que o login é inválido

# Funcionalidade: Realizar Login

## Cenário: Usuário consegue fazer login com sucesso
Dado que o cliente queira fazer login no sistema
Quando o cliente informar seu nome de login "<nome_de_login>" e sua senha "<senha>"
Então o sistema deve autenticar o cliente com sucesso

## Cenário: Usuário insere a senha errada
Dado que o cliente tente fazer login no sistema
Quando o cliente informar seu nome de login "<nome_de_login>" e sua senha "<senha>"
Então o sistema deve exibir uma mensagem de erro de login

# Funcionalidade: Adicionar Produto

## Cenário: Atendente consegue incluir novos produtos 

Dado que o atendente tenha realizado o login no sistema
Quando o atendente selecionar a opção de adicionar produto
E o sistema solicitar as informações do novo produto
E o atendente preencher as informações do produto corretamente com nome "<nome_do_produto>", preço "<preco_do_produto>" e quantidade "<quantidade_do_produto>"
Então o sistema deve registrar o novo produto no estoque

## Cenário: Atendente digita alguma informação errada
Quando o atendente selecionar a opção de adicionar produto
E o sistema solicitar as informações do novo produto
E o atendente preencher as informações do produto incorretamente com nome "<nome_do_produto>", preço "<preco_do_produto>" e quantidade "<quantidade_do_produto>"
Então o sistema deve exibir uma mensagem de erro de preenchimento

## Cenário: Atendente não digita nada e da enter
Quando o atendente selecionar a opção de adicionar produto
E o sistema solicitar as informações do novo produto
E o atendente preencher as informações e deixar algum espaço em branco
Então o sistema deve exibir uma mensagem de erro de preenchimento

# Funcionalidade: Vender Produtos Localmente

## Cenário: Tem produtos suficientes no estoque

Dado que o atendente tenha realizado o login no sistema
Quando o atendente selecionar a opção de registrar venda
E o sistema exibir a lista de produtos disponíveis
E o atendente selecionar os produtos vendidos e informar a quantidade de cada produto
Então o sistema deve verificar o estoque dos produtos selecionados
E se houver estoque suficiente, o sistema deve registrar a venda e atualizar o estoque dos produtos vendidos





## Cenário: Não tem produtos suficientes no estoque

Dado que o atendente tenha realizado o login no sistema
Quando o atendente selecionar a opção de registrar venda
E o sistema exibir a lista de produtos disponíveis
E o atendente selecionar os produtos vendidos e informar a quantidade de cada produto
Então o sistema deve verificar o estoque dos produtos selecionados
E se não houver estoque suficiente, o sistema deve exibir uma mensagem de erro de estoque insuficiente


# Funcionalidade: Vender Produtos Remotamente

## Cenário: Tem produtos suficientes no estoque

Dado que o cliente tenha realizado o login no sistema
Quando o cliente selecionar o produto que deseja
E o sistema exibir a lista de produtos disponíveis
E o cliente selecionar os produtos a serem comprados e informar a quantidade de cada produto
Então o sistema deve verificar o estoque dos produtos selecionados
E se houver estoque suficiente, o sistema deve registrar a venda e atualizar o estoque dos produtos vendidos 

## Cenário: Não tem produtos suficientes no estoque

Dado que o cliente tenha realizado o login no sistema
Quando o cliente selecionar o produto que deseja
E o sistema exibir a lista de produtos disponíveis
E o cliente selecionar os produtos a serem comprados e informar a quantidade de cada produto
Então o sistema deve verificar o estoque dos produtos selecionados
E se houver estoque suficiente, o sistema deve registrar a venda e atualizar o estoque dos produtos vendidos 

Dado que o cliente tenha realizado o login no sistema
Quando o cliente selecionar o produto que deseja
E o sistema exibir a lista de produtos disponíveis
E o cliente selecionar os produtos a serem comprados e informar a quantidade de cada produto
Então o sistema deve verificar o estoque dos produtos selecionados
E se não houver estoque suficiente, o sistema deve exibir uma mensagem de erro de estoque insuficiente
