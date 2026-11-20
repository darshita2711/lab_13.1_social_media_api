# Lab 1 – Reflection

**1. Why whitelist IP addresses?**

IP whitelisting allows only trusted addresses to access the database. Allowing `0.0.0.0/0` increases the risk of unauthorized access.

**2. What is dotenv?**

dotenv loads environment variables from a `.env` file and helps protect sensitive information. Production applications can also use cloud environment variables and secret management services.

**3. How would you debug a connection failure?**

I would check the MongoDB cluster, database credentials, connection string, network access settings, and terminal error messages.