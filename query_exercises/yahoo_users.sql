-- Count the number of users with yahoo emails.

SELECT COUNT(*) AS yahoo_users
FROM   users
WHERE  email LIKE '%yahoo.com';