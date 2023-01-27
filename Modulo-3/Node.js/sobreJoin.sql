
-- inner join

-- Vai trazer/juntar todos os registro que possie relação um com o outro

-- a letra 'e' ea letra 'f', são apelidos que foram dados para a empresa e filiais 
select * from empresas e join filiais f on e.id = f.empresa_id

-- Filtrando tabelas com os apelidos
-- vai mostrar o id da empresa,id da filial,nome da empresa, pais da filial, uma vez que foi dado apelido para empresa e fillial
-- o as serve para aparecer o nome na tabela, sem ele so vai aparecer 'id'
select e.id as empresaId, f.id as filialId ,e.nome,f.pais from empresas e join filiais f on e.id = f.empresa_id

-- para juntar com outra tabela é so passar outro join
select e.id as empresaId, f.id as filialId, e.nome, f.pais, p.nome as funcionario
		     from empresas e
		     join filiais f on e.id = f.empresa_id
		     join pessoas p on e.id = p.empresa_id;

-- LEFT JOIN

-- ele tras todos os registros da esquerda, independete de ele ter relação ou não com a tabela da direita
--ex: na query a baixa estamos pedindo para ela monstrar todas as empresa(lado esquerdo) e tenta juntas com as filiais.
-- Mas ele vai mostrar o 'facebbok' que no nosso banco de dados não tem filial.

select e.id as empresaId, f.id as filialId, e.nome, f.pais from empresas e left join filiais f on e.id = f.empresa_id;

-- RIGHT JOI
-- mesma coisa do exemplo a cima

select e.id as empresaId, f.id as filialId, e.nome, f.pais from empresas e right join filiais f on e.id = f.empresa_id;


-- full join

--vai trazer/juntar todos os registros indepente de houver relação ou não

select e.id as empresaId, f.id as filialId, e.nome, f.pais from empresas e full join filiais f on e.id = f.empresa_id
		   

