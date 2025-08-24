export const authorizedAdmins = [
    'vishweshpatilj.b@gmail.com',
    
];

export function isUserAdmin(email?: string | null): boolean {
    if (!email) {
        return false;
    }
    // Case-insensitive check
    return authorizedAdmins.some(adminEmail => adminEmail.toLowerCase() === email.toLowerCase());
}
