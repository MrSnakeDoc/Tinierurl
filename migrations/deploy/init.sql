-- Deploy shortee:init to pg

BEGIN;

CREATE TABLE CUSTOMER (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email text not null unique,
    password text not null,
    firstname text not null,
    lastname text not null,
    pseudo text DEFAULT null,
    created_at timestamptz NOT NULL DEFAULT NOW(),
    updated_at timestamptz
);

CREATE TABLE URL (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    urlCode text NOT NULL unique,
	longUrl text NOT NULL unique,
	shortUrl text NOT NULL unique,
    created_at timestamptz NOT NULL DEFAULT NOW(),
    updated_at timestamptz
);


--? The function update the updated_at field
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;


--! TRIGGER will execute the function when an insert or an update is performed
CREATE TRIGGER set_timestamp
BEFORE UPDATE OR INSERT ON CUSTOMER
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_timestamp
BEFORE UPDATE OR INSERT ON URL
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

--? The function fills the pseudo field with firstname 
CREATE OR REPLACE FUNCTION trigger_set_pseudo() RETURNS trigger AS $$
    BEGIN
        NEW.pseudo := NEW.firstname;
        RETURN NEW;
    END;
$$ LANGUAGE plpgsql;

--! TRIGGER with condition (IF pseudo is null or empty so execute function trigger_set_pseudo)
CREATE TRIGGER set_pseudo
    BEFORE INSERT OR UPDATE ON CUSTOMER
    FOR EACH ROW
    WHEN (NEW.pseudo IS NULL OR NEW.pseudo = '')
    EXECUTE PROCEDURE trigger_set_pseudo();

COMMIT;

