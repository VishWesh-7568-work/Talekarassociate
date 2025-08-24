import { initializeApp, getApps, getApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { cookies } from 'next/headers';

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string);

const adminApp = !getApps().length
  ? initializeApp({
      credential: cert(serviceAccount),
    })
  : getApp();

const adminAuth = getAuth(adminApp);

export { adminApp, adminAuth };

export const getAuthenticatedUser = async () => {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session')?.value;
    if (!sessionCookie) {
        return null;
    }

    try {
        const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie, true);
        return decodedClaims;
    } catch (error) {
        console.error('Error verifying session cookie:', error);
        return null;
    }
};
