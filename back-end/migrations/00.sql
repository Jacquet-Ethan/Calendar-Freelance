DROP TABLE IF EXISTS bookings CASCADE;
DROP TABLE IF EXISTS pricing CASCADE;
DROP TABLE IF EXISTS freelancers CASCADE;

CREATE TABLE freelancers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  specialty VARCHAR(255) NOT NULL,
  bio TEXT,
  avatar_url TEXT,
  linkedin VARCHAR(255),
  github VARCHAR(255),
  malt VARCHAR(255),
  portfolio VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE pricing (
  id SERIAL PRIMARY KEY,
  freelancer_id INTEGER REFERENCES freelancers(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  duration VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  freelancer_id INTEGER REFERENCES freelancers(id),
  booking_date DATE NOT NULL,
  time_slot VARCHAR(50),
  client_first_name VARCHAR(255) NOT NULL,
  client_email VARCHAR(255) NOT NULL,
  client_phone VARCHAR(50) NOT NULL,
  client_company VARCHAR(255),
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);
