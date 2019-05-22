-- Find the earliest date a user joined.

SELECT DATE_FORMAT(MIN(created_at), '%M %D %Y') AS earliest_date
FROM   users;