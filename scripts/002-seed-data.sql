-- Insert sample properties
INSERT INTO properties (
  id,
  name, location, price, original_price, rating, reviews_count, image_url, images,
  facilities, available_rooms, discount_percentage, is_popular, story, description,
  type, latitude, longitude, amenities, rules, contact_phone, contact_whatsapp, contact_email,
  is_active
) VALUES 
(
  uuid_generate_v4(),
  'ANTIEQ Melati Residence',
  'Kota Gorontalo, Gorontalo',
  600000,
  900000,
  4.9,
  85,
  '/images/antieq-exterior.jpg',
  ARRAY['/images/antieq-exterior.jpg', '/images/antieq-corridor.jpg', '/images/antieq-bedroom1.jpg', '/images/antieq-bathroom.jpg'],
  ARRAY['WiFi 100Mbps', 'AC Premium', 'Kamar Mandi Dalam', 'Parkir Luas', 'CCTV 24/7'],
  5,
  33,
  true,
  'Hunian eksklusif untuk putri di jantung Kota Gorontalo dengan akses mudah ke kampus dan pusat kota',
  'ANTIEQ Melati Residence adalah hunian premium khusus putri yang berlokasi strategis di pusat Kota Gorontalo. Dengan desain modern dan fasilitas lengkap, tempat ini menjadi pilihan utama mahasiswi dan pekerja muda.',
  'putri',
  0.5435,
  123.0582,
  ARRAY['WiFi Fiber 100Mbps', 'AC di setiap kamar', 'Kamar mandi dalam', 'Lemari pakaian', 'Meja belajar', 'Kasur spring bed', 'Parkir motor', 'CCTV 24 jam', 'Security', 'Dapur bersama', 'Ruang tamu', 'Laundry'],
  ARRAY['Khusus putri', 'Tidak boleh membawa tamu lawan jenis ke kamar', 'Jam malam 22:00 WIT', 'Dilarang merokok', 'Dilarang membawa hewan peliharaan', 'Wajib menjaga kebersihan'],
  '+62 812-3456-7890',
  '+62 812-3456-7890',
  'melati@antieqkost.id',
  true
),
(
  uuid_generate_v4(),
  'ANTIEQ Harmoni Elite',
  'Limboto, Gorontalo',
  450000,
  650000,
  4.8,
  62,
  '/images/antieq-evening-view.jpg',
  ARRAY['/images/antieq-evening-view.jpg', '/images/antieq-common-area.jpg', '/images/antieq-kitchen.jpg', '/images/antieq-community.jpg'],
  ARRAY['WiFi Unlimited', 'Dapur Bersama', 'Laundry Gratis', 'Security 24/7', 'Mushola'],
  8,
  31,
  false,
  'Konsep co-living modern untuk putra di area Limboto yang tenang dengan suasana kampung yang asri',
  'ANTIEQ Harmoni Elite menawarkan konsep co-living yang modern dengan suasana kekeluargaan. Berlokasi di Limboto yang tenang, cocok untuk mahasiswa dan pekerja yang menginginkan lingkungan kondusif.',
  'putra',
  0.6089,
  123.0107,
  ARRAY['WiFi unlimited', 'Dapur bersama lengkap', 'Laundry gratis', 'Mushola', 'Ruang santai', 'Parkir luas', 'Security 24 jam', 'Air mineral', 'Cleaning service', 'Coworking space'],
  ARRAY['Khusus putra', 'Jam berkunjung tamu sampai 21:00 WIT', 'Dilarang membawa alkohol', 'Wajib menjaga ketenangan', 'Gotong royong kebersihan', 'Respect sesama penghuni'],
  '+62 812-3456-7891',
  '+62 812-3456-7891',
  'harmoni@antieqkost.id',
  true
),
(
  uuid_generate_v4(),
  'ANTIEQ Luxury Suites',
  'Bone Bolango, Gorontalo',
  800000,
  1200000,
  4.9,
  94,
  '/images/antieq-corridor.jpg',
  ARRAY['/images/antieq-corridor.jpg', '/images/antieq-upper-corridor.jpg', '/images/antieq-bedroom2.jpg', '/images/antieq-bathroom.jpg'],
  ARRAY['WiFi Fiber', 'AC Inverter', 'Gym & Pool', 'Rooftop Garden', 'Coworking Space'],
  3,
  33,
  true,
  'Apartemen mewah dengan pemandangan Teluk Tomini untuk profesional muda yang menghargai kualitas',
  'ANTIEQ Luxury Suites adalah hunian premium dengan standar apartemen. Menawarkan pemandangan Teluk Tomini yang menakjubkan, fasilitas gym, pool, dan coworking space untuk profesional muda.',
  'luxury',
  0.5167,
  123.2833,
  ARRAY['WiFi fiber optic', 'AC inverter', 'Swimming pool', 'Gym 24 jam', 'Rooftop garden', 'Coworking space', 'Meeting room', 'Cafe', 'Concierge service', 'Housekeeping', 'Valet parking', 'Sea view'],
  ARRAY['Profesional/eksekutif muda', 'Dress code di area publik', 'Reservasi fasilitas', 'Quiet hours 22:00-06:00', 'No smoking in rooms', 'Maintain cleanliness'],
  '+62 812-3456-7892',
  '+62 812-3456-7892',
  'luxury@antieqkost.id',
  true
),
(
  uuid_generate_v4(),
  'ANTIEQ WISMA KOST',
  'Jl. Antapani, Bandung',
  850000,
  1000000,
  4.8,
  127,
  '/images/antieq-exterior.jpg',
  ARRAY['/images/antieq-exterior.jpg', '/images/antieq-corridor.jpg', '/images/antieq-kitchen.jpg', '/images/antieq-common-area.jpg', '/images/antieq-bathroom.jpg', '/images/antieq-bedroom1.jpg', '/images/antieq-bedroom2.jpg', '/images/antieq-upper-corridor.jpg', '/images/antieq-evening-view.jpg', '/images/antieq-community.jpg'],
  ARRAY['WiFi', 'AC', 'Kamar Mandi Dalam', 'Dapur Bersama', 'Parkir Motor', 'Laundry', 'Security 24 Jam'],
  8,
  15,
  true,
  'Kost modern dengan fasilitas lengkap di kawasan strategis Antapani. Dekat dengan kampus dan pusat perbelanjaan.',
  'Kost eksklusif dengan desain modern dan fasilitas premium. Lokasi strategis dekat kampus ITB, UNPAD, dan pusat kota Bandung. Dilengkapi dengan WiFi super cepat, AC di setiap kamar, dapur bersama yang bersih, dan area komunal yang nyaman.',
  'luxury',
  -6.9175,
  107.6191,
  ARRAY['WiFi Super Cepat', 'AC Split', 'Kamar Mandi Dalam', 'Water Heater', 'Lemari Pakaian', 'Meja Belajar', 'Kasur Spring Bed', 'Dapur Bersama', 'Kulkas Bersama', 'Dispenser', 'Parkir Motor', 'Laundry Service', 'Security 24 Jam', 'CCTV', 'Cleaning Service'],
  ARRAY['Dilarang merokok di dalam kamar', 'Jam malam pukul 22:00', 'Tamu maksimal sampai pukul 21:00', 'Dilarang membawa hewan peliharaan', 'Wajib menjaga kebersihan bersama'],
  '+62812-3456-7890',
  '+62812-3456-7890',
  'info@antieqkost.com',
  true
),
(
  uuid_generate_v4(),
  'Kost Putri Melati',
  'Jl. Dago, Bandung',
  650000,
  750000,
  4.5,
  89,
  '/placeholder.svg?height=300&width=400',
  ARRAY['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
  ARRAY['WiFi', 'Kamar Mandi Dalam', 'Dapur Bersama', 'Parkir Motor', 'Security'],
  5,
  13,
  true,
  'Kost khusus putri dengan suasana homey dan aman di kawasan Dago yang sejuk.',
  'Kost khusus putri dengan lingkungan yang aman dan nyaman. Lokasi strategis di Dago dekat dengan berbagai kampus dan fasilitas umum.',
  'putri',
  -6.8951,
  107.6098,
  ARRAY['WiFi', 'Kamar Mandi Dalam', 'Lemari Pakaian', 'Meja Belajar', 'Kasur', 'Dapur Bersama', 'Kulkas Bersama', 'Parkir Motor', 'Security 24 Jam'],
  ARRAY['Khusus putri', 'Jam malam pukul 21:30', 'Tamu laki-laki tidak diperbolehkan masuk', 'Dilarang merokok', 'Wajib menjaga kebersihan'],
  '+62813-4567-8901',
  '+62813-4567-8901',
  'melati.kost@gmail.com',
  true
),
(
  uuid_generate_v4(),
  'Kost Putra Mandiri',
  'Jl. Sukajadi, Bandung',
  550000,
  600000,
  4.2,
  64,
  '/placeholder.svg?height=300&width=400',
  ARRAY['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
  ARRAY['WiFi', 'Kamar Mandi Luar', 'Dapur Bersama', 'Parkir Motor'],
  12,
  8,
  false,
  'Kost putra dengan harga terjangkau dan fasilitas standar di lokasi strategis.',
  'Kost putra dengan harga ekonomis namun tetap nyaman. Cocok untuk mahasiswa dengan budget terbatas.',
  'putra',
  -6.8915,
  107.5847,
  ARRAY['WiFi', 'Lemari Pakaian', 'Meja Belajar', 'Kasur', 'Dapur Bersama', 'Kamar Mandi Bersama', 'Parkir Motor'],
  ARRAY['Khusus putra', 'Jam malam pukul 23:00', 'Dilarang membawa tamu menginap', 'Dilarang merokok di kamar', 'Bayar tepat waktu'],
  '+62814-5678-9012',
  '+62814-5678-9012',
  'mandiri.kost@gmail.com',
  true
);

-- Insert sample users
INSERT INTO users (id, email, name, phone, role) VALUES 
(uuid_generate_v4(), 'admin@antieqkost.id', 'Admin ANTIEQ', '+62 812-0000-0000', 'admin'),
(uuid_generate_v4(), 'siti@example.com', 'Siti Nurhaliza', '+62 812-1111-1111', 'user'),
(uuid_generate_v4(), 'fatimah@example.com', 'Fatimah Zahra', '+62 812-2222-2222', 'user'),
(uuid_generate_v4(), 'akbar@example.com', 'Muhammad Akbar', '+62 812-3333-3333', 'user'),
(uuid_generate_v4(), 'admin@cozykos.com', 'Admin Cozykos', '081234567890', 'admin'),
(uuid_generate_v4(), 'user@example.com', 'John Doe', '+62813-4567-8901', 'user');

-- Insert sample reviews
INSERT INTO reviews (user_id, property_id, rating, comment) 
SELECT 
  u.id,
  p.id,
  5,
  'Tempat yang sangat nyaman dan bersih. Fasilitas lengkap dan lokasi strategis. Highly recommended!'
FROM users u, properties p 
WHERE u.email = 'siti@example.com' AND p.name = 'ANTIEQ Melati Residence';

INSERT INTO reviews (user_id, property_id, rating, comment) 
SELECT 
  u.id,
  p.id,
  5,
  'Pelayanan excellent, kamar bersih, WiFi kencang. Perfect untuk mahasiswa!'
FROM users u, properties p 
WHERE u.email = 'fatimah@example.com' AND p.name = 'ANTIEQ Melati Residence';

INSERT INTO reviews (user_id, property_id, rating, comment) 
SELECT 
  u.id,
  p.id,
  5,
  'Suasana kekeluargaan yang hangat. Teman-teman di sini sangat supportive.'
FROM users u, properties p 
WHERE u.email = 'akbar@example.com' AND p.name = 'ANTIEQ Harmoni Elite';

-- Insert sample contacts
INSERT INTO contacts (name, email, phone, subject, message) VALUES 
('Jane Smith', 'jane@example.com', '081234567892', 'Pertanyaan tentang booking', 'Saya ingin menanyakan tentang proses booking kost.'),
('Bob Wilson', 'bob@example.com', '081234567893', 'Keluhan fasilitas', 'Ada beberapa fasilitas yang perlu diperbaiki.');
