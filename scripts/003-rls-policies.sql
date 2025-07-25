-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE property_views ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can view their own profile" ON users
  FOR SELECT USING (auth.uid()::text = id::text);

CREATE POLICY "Users can update their own profile" ON users
  FOR UPDATE USING (auth.uid()::text = id::text);

CREATE POLICY "Admins can view all users" ON users
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id::text = auth.uid()::text AND role = 'admin'
    )
  );

-- Properties policies
CREATE POLICY "Anyone can view active properties" ON properties
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage properties" ON properties
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id::text = auth.uid()::text AND role = 'admin'
    )
  );

-- Bookings policies
CREATE POLICY "Users can view their own bookings" ON bookings
  FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can create their own bookings" ON bookings
  FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

CREATE POLICY "Users can update their own bookings" ON bookings
  FOR UPDATE USING (auth.uid()::text = user_id::text);

CREATE POLICY "Admins can view all bookings" ON bookings
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id::text = auth.uid()::text AND role = 'admin'
    )
  );

CREATE POLICY "Admins can update all bookings" ON bookings
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id::text = auth.uid()::text AND role = 'admin'
    )
  );

-- Reviews policies
CREATE POLICY "Anyone can view reviews" ON reviews
  FOR SELECT USING (true);

CREATE POLICY "Users can create reviews for their bookings" ON reviews
  FOR INSERT WITH CHECK (
    auth.uid()::text = user_id::text AND
    EXISTS (
      SELECT 1 FROM bookings 
      WHERE id = reviews.booking_id AND user_id::text = auth.uid()::text
    )
  );

CREATE POLICY "Users can update their own reviews" ON reviews
  FOR UPDATE USING (auth.uid()::text = user_id::text);

CREATE POLICY "Admins can manage all reviews" ON reviews
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id::text = auth.uid()::text AND role = 'admin'
    )
  );

-- Contacts policies
CREATE POLICY "Anyone can create contacts" ON contacts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view all contacts" ON contacts
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id::text = auth.uid()::text AND role = 'admin'
    )
  );

CREATE POLICY "Admins can update contacts" ON contacts
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id::text = auth.uid()::text AND role = 'admin'
    )
  );

-- Property views policies
CREATE POLICY "Anyone can create property views" ON property_views
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view all property views" ON property_views
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id::text = auth.uid()::text AND role = 'admin'
    )
  );
