create database planilhasWeb default character set utf8mb4 collate utf8mb4_bin;

use planilhasWeb;

CREATE USER 'pcuser'@'%' IDENTIFIED BY 'Flu021202';
GRANT ALL PRIVILEGES ON *.* TO 'pcuser'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

create table if not exists clients (
 id int auto_increment primary key,
 name varchar(50),
 ownerName varchar(50),
 createdAt date,
 updatedAt date
);

create table if not exists proposal (
 id int auto_increment primary key,
 idclient int,
 projectManager varchar(40),
 proposalTitle varchar(50),
 elaborationDate date,
 updateAt date,
 foreign key (idclient) references clients(id)
);

create table if not exists actors (
 actors varchar(30),
 simpleField bit,
 mediumField bit,
 complexField bit,
 totalActors int,
 appliedFactor int,
 totalWeightActors int,
 idProposal int
);
