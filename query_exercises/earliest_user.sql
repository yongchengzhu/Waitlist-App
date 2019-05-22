-- Find the email of the earliest user.

SELECT email
FROM   users
WHERE  created_at = (
  SELECT MIN(created_at)
  FROM   users
);