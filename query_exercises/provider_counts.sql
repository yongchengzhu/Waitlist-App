-- Calculate the total number of users for each email provider.

SELECT
  CASE 
    WHEN email LIKE '%@gmail.com' THEN 'google'
    WHEN email LIKE '%@yahoo.com' THEN 'yahoo'
    WHEN email LIKE '%@hotmail.com' THEN 'hotmail'
    ELSE 'others'
  END AS providers,
  COUNT(*) AS total_users
FROM
  users
GROUP BY
  providers
ORDER BY
  total_users DESC;