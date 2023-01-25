
--tradução: criar tabela editoras
create table editoras (
--   nome, tipo, regra ou restrição
  id serial primary key,
--  Nome: id = nome da coluna
--  tipo: serial = numero unico que sera gerado automaticamente
--  regra ou restrição: primary key = chave primaria 
   
  nome text not null,
--  Nome: nome = nome da coluna
--  tipo: text = string
--  regra ou restrição: not null = preenchimento obrigatorio 
  
  cnpj text unique,
--  cnpj: nome = nome da coluna
--  tipo: text = string
--  regra ou restrição: unique = so pode ter um na tabela
  
  data_cadastro timestamp default now()
--  cnpj: data_cadastro = nome da coluna
--  tipo: timestamp = tempo
--  regra ou restrição: default = valor padrao, now(): agora
  
);

-- acrescentar informação na tabela
insert into editoras (nome,cnpj) values ('Cubos academy', '0001-1115-12')

---------------------------------------------------
-- 1:N
create table livros (
  isbn integer primary key, 
--  Nome: isbn = nome da coluna
--  tipo: integer = numero inteiro
--  regra ou restrição: primary key = chave primaria 
  editora_id integer references editoras(id),
--  Nome: editora_id = nome da coluna
--  tipo: integer = numero inteiro
--  regra ou restrição: criando uma chave estragera = references editoras(id) = referencia a tabela editoras a coluna id
--  IMPORTANTE SABER, tambem é possivel fazer essa referencia depois com o comando:
--   foreign key editoria-id references editoras(id)
--   se ler assim: criar chave estrangeira na coluna editoria-id onde a referencia sera o id da tabela editoras
  titulo text not null,
  --  titulo: nome = nome da coluna
--  tipo: text = string
--  regra ou restrição: not null = preenchimento obrigatorio
  
  data_publicacao date not null
);
--   data_publicacao: nome = nome da coluna
--  tipo: data = somente ano dia e mes
--  regra ou restrição: not null = preenchimento obrigatorio

-- acrescentar informação na tabela
insert into livros 
(isbn, editora_id, titulo, data_publicacao)
values
(12345, 1, 'Backend com Node.js', '2022-01-01');

----------------------------------------------
-- 1:1
create table enderecos (
  id serial primary key,
  editora_id integer references editoras(id),
  cep text not null,
  rua text,
  bairro text,
  cidade text,
  estado char(2),
  pais text
);

insert into enderecos 
(editora_id, cep)
values 
(1, '41000-000');

--------------------------------------------
-- N:N
--quando é realizado uma tabela de muito para muitos, é preciso de uma tabela auxiliar

-- tabela de muito para muitos
create table categorias (
	id serial primary key,
  	nome text not null
);

-- tabela auxiliar
create table livro_categoria (
	livro_isbn integer references livros(isbn),
  	categoria_id integer references categorias(id)
);

-- cadastrar categorias
insert into categorias (nome) values ('Tecnologia'), ('Programação'), ('Nodejs');

insert into livro_categoria 
(livro_isbn, categoria_id)
values
(12345, 1),
(12345, 2),
(12345, 3),
(12346, 2);

------------------------------------------
-- Auto Relacionamento

create table comentarios (
	id serial primary key,
  	descricao text not null,
  	comentario_id integer references comentarios(id), --fazendo auto relacionamento/referencia nela mesmo tabela id
  	livro_isbn integer references livros(isbn) -- fazendo refencia tabela livros
);

insert into comentarios (livro_isbn, descricao) values (12345, 'Livro muito bom');

insert into comentarios (comentario_id, descricao) values (1, 'Obrigado pelo elogio');

---------------------------------------------------
-- Alterar tabelas
--adicionar tabelas
-- comando padrao para alterar - qual tabela - adiconar --  coluna -- nome da coluna e tipo
alter table categorias add column descricao text;
--Excluir tabelas
-- comando padrao para alterar - qual tabela - excluir --  coluna -- nome da coluna que quer excluir
alter table categorias drop column descricao;
-- Alterar o tipo
-- comando padrao para alterar - qual tabela - alterar --  coluna -- nome da coluna - tipo que quer que seja
alter table categorias alter column descricao type varchar(100);

create table telefones (
	id serial primary key,
  	editora_id integer,
  	numero text
);

alter table telefones 
add constraint fk_telefones_editoras_id
foreign key (editora_id) references editoras(id);