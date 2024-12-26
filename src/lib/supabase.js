import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Profile functions
export const getProfile = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error) throw error;
  return data;
};

export const updateProfile = async (updates) => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('No user logged in');

  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', user.id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Banner functions
export const getBanners = async () => {
  const { data, error } = await supabase
    .from('banners')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const createBanner = async (banner) => {
  const { data, error } = await supabase
    .from('banners')
    .insert(banner)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateBanner = async (id, updates) => {
  const { data, error } = await supabase
    .from('banners')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteBanner = async (id) => {
  const { error } = await supabase
    .from('banners')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

// Flash Sales functions
export const getFlashSales = async () => {
  const { data, error } = await supabase
    .from('flash_sales')
    .select('*')
    .order('start_time', { ascending: true });

  if (error) throw error;
  return data;
};

export const createFlashSale = async (flashSale) => {
  const { data, error } = await supabase
    .from('flash_sales')
    .insert(flashSale)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateFlashSale = async (id, updates) => {
  const { data, error } = await supabase
    .from('flash_sales')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteFlashSale = async (id) => {
  const { error } = await supabase
    .from('flash_sales')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

// Notifications functions
export const getNotifications = async () => {
  const { data, error } = await supabase
    .from('notifications')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const markNotificationAsRead = async (id) => {
  const { data, error } = await supabase
    .from('notifications')
    .update({ read: true })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};