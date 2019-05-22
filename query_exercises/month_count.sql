-- Find out how many users joined at different months.

SELECT
  DATE_FORMAT(created_at, '%M') AS month,
  COUNT(*) AS users_joined
FROM
  users
GROUP BY
  month
ORDER BY
  users_joined
  DESC;