-- Verify shortee:init on pg

BEGIN;

SELECT * FROM CUSTOMER WHERE false;
SELECT * FROM URL WHERE false;

ROLLBACK;
