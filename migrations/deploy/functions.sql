-- Deploy shortee:functions to pg

BEGIN;

create or replace function add_customer(json) returns customer as $$
	insert into "customer"(email, password, firstname, lastname, pseudo)
		values ($1->>'email', $1->>'password', $1->>'firstname', $1->>'lastname', $1->>'pseudo') returning *;
$$ language sql strict;

create or replace function update_customer(json) returns customer as $$
	update "customer" set 
		email = $1->>'email',
		firstname = $1->>'firstname',
		lastname = $1->>'lastname',
		pseudo = $1->>'pseudo'
    where id = ($1->>'id')::int returning *;
$$ language sql strict;

create or replace function add_url(json) returns url as $$
	insert into URL(urlCode, longUrl, shortUrl)
		values ($1->>'urlCode', $1->>'longUrl', $1->>'shortUrl') returning *;
$$ language sql strict;

create or replace function update_url(json) returns url as $$
	update url set 
		urlCode = $1->>'urlCode',
		longUrl = $1->>'longUrl',
		shortUrl = $1->>'shortUrl'
    where id = ($1->>'id')::int returning *;
$$ language sql strict;

create or replace function update_password(json) returns customer as $$
	update "customer" set 
		password = $1->>'password'
    where id = ($1->>'id')::int returning customer;
$$ language sql strict;




COMMIT;
