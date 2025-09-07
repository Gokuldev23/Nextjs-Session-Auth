CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (for multi-user support if needed)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4 (),
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    created_at TIMESTAMP
    WITH
        TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP
    WITH
        TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        is_active BOOLEAN DEFAULT TRUE
);

