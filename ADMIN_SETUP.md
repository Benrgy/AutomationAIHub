# Admin User Setup Guide

## Creating Your First Admin User

Since you will be the only admin, follow these steps to grant yourself admin access:

### Step 1: Sign Up
1. Navigate to `/auth` in your browser
2. Create an account using your email and password
3. **Important:** Email confirmation is now auto-enabled, so you'll be logged in immediately

### Step 2: Get Your User ID
After signing up, you can find your user ID by:

**Option A: Check the database**
1. Go to your Lovable Cloud backend
2. Navigate to the database
3. Look in the `auth.users` table for your email
4. Copy your `id` (UUID format)

**Option B: Use the browser console**
1. While logged in, open browser DevTools (F12)
2. Go to Console tab
3. Run this command:
```javascript
(await supabase.auth.getUser()).data.user?.id
```
4. Copy the returned UUID

### Step 3: Insert Admin Role
Using the backend SQL editor or database tool, run:

```sql
INSERT INTO public.user_roles (user_id, role)
VALUES ('YOUR-USER-ID-HERE', 'admin');
```

Replace `YOUR-USER-ID-HERE` with the UUID you copied.

### Step 4: Verify Admin Access
1. Refresh your browser
2. You should now see "Admin Panel" and "Tools Admin" links in the navigation
3. Visit `/tools/admin` to verify you have admin access

## Security Notes

✅ **Secured:** The user_roles table has RLS policies that:
- Only allow admins to INSERT/UPDATE/DELETE roles (prevents privilege escalation)
- Use the `is_admin()` security definer function to prevent RLS recursion
- Users can only view their own roles

✅ **Protected Routes:** The admin pages are protected by:
- `ProtectedRoute` component requiring authentication
- Admin role check using the `useAuth` hook
- Automatic redirect for non-admin users

⚠️ **Important:** Never expose your admin credentials or user ID publicly.

## Troubleshooting

### Can't see admin links after adding role?
- Clear browser cache and cookies
- Log out and log back in
- Check browser console for errors

### "Not authorized" error when accessing admin pages?
- Verify the user_id in user_roles matches your authenticated user ID
- Make sure you're logged in with the correct account
- Check that the role is set to 'admin' (not 'user' or 'moderator')

### Need to add another admin? (Future)
Run the same INSERT command with the new admin's user ID.
