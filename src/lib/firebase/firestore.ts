'use server';

import { adminApp } from './server';
import { getFirestore } from 'firebase-admin/firestore';

const adminDb = getFirestore(adminApp);

export interface Person {
    id: string;
    name: string;
    role: string;
    type: 'leadership' | 'associate';
    content?: string[];
    landmarkCasesTitle?: string;
    landmarkCases?: string[];
}

const initialLeadership: Omit<Person, 'id'>[] = [
    {
        name: 'Satish Talekar',
        role: 'Managing Partner',
        type: 'leadership',
        content: [
            "Satish Talekar is a distinguished constitutional expert, renowned for his transformative impact on law and a legacy of landmark judgments. As the driving force behind Talekar & Associates, he has cultivated a firm that not only practices law but actively shapes it, fostering an environment of fierce independence and intellectual rigor."
        ],
        landmarkCasesTitle: 'Key Representations',
        landmarkCases: [
            "Secured a landmark ruling in the Maratha Reservation case, setting a new precedent in affirmative action jurisprudence.",
            "Successfully challenged state-wide regulations on educational admissions, ensuring equitable access for all students.",
            "Represented a major public sector undertaking in a high-stakes arbitration concerning infrastructure development."
        ]
    },
    {
        name: 'Pradnya Talekar',
        role: 'Partner',
        type: 'leadership',
        content: [
            "Pradnya Talekar combines deep legal acumen with a client-centric approach, specializing in commercial litigation and regulatory compliance. Her strategic counsel is sought after by corporations and institutions navigating complex legal landscapes. She plays a pivotal role in mentoring the firm's associates and upholding its commitment to excellence."
        ],
        landmarkCasesTitle: 'Key Representations',
        landmarkCases: [
            "Advised a leading financial institution on compliance with the new Digital Personal Data Protection Act.",
            "Acted as lead counsel in a complex cross-border commercial dispute, resulting in a favorable settlement for the client.",
            "Successfully defended a corporate client in a significant white-collar crime investigation."
        ]
    }
];

const initialAssociates: Omit<Person, 'id'>[] = [
    { name: 'Madhuri A. Bhadke', role: 'Associate', type: 'associate' },
    { name: 'Tejas D. Dande', role: 'Associate', type: 'associate' },
    { name: 'Abhishek A. Deshpande', role: 'Associate', type: 'associate' },
    { name: 'Vrushali U. Maindad', role: 'Associate', type: 'associate' },
];

async function seedInitialData() {
    const peopleCol = adminDb.collection('people');
    const snapshot = await peopleCol.limit(1).get();
    
    if (snapshot.empty) {
        console.log("People collection is empty. Seeding initial data...");
        const batch = adminDb.batch();
        
        initialLeadership.forEach(person => {
            const docRef = peopleCol.doc();
            batch.set(docRef, person);
        });
        
        initialAssociates.forEach(person => {
            const docRef = peopleCol.doc();
            batch.set(docRef, person);
        });

        await batch.commit();
        console.log("Initial data seeded successfully.");
    }
}

export async function getPeople(): Promise<Person[]> {
    try {
        await seedInitialData(); // This will only run if the collection is empty

        const peopleCol = adminDb.collection('people');
        const snapshot = await peopleCol.get();
        
        const peopleList = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        })) as Person[];
        
        // Sort by type (leadership first) then by name
        peopleList.sort((a, b) => {
            if (a.type === 'leadership' && b.type === 'associate') return -1;
            if (a.type === 'associate' && b.type === 'leadership') return 1;
            return a.name.localeCompare(b.name);
        });

        return peopleList;
    } catch (error) {
        console.error("Error fetching people:", error);
        // Don't re-throw the error, just return empty list on failure
        // This prevents the page from crashing if the DB is not ready.
        return [];
    }
}

export async function getPerson(id: string): Promise<Person | null> {
    try {
        const doc = await adminDb.collection('people').doc(id).get();
        if (!doc.exists) {
            return null;
        }
        return { id: doc.id, ...doc.data() } as Person;
    } catch (error) {
        console.error("Error fetching person:", error);
        return null;
    }
}

export async function addPerson(person: Omit<Person, 'id'>): Promise<{ success: boolean, id?: string, error?: string }> {
    try {
        const docRef = await adminDb.collection('people').add(person);
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error("Error adding person: ", error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        return { success: false, error: `Failed to add person: ${errorMessage}` };
    }
}

export async function updatePerson(id: string, person: Partial<Omit<Person, 'id'>>): Promise<{ success: boolean, error?: string }> {
    try {
        const personRef = adminDb.collection('people').doc(id);
        await personRef.update(person);
        return { success: true };
    } catch (error) {
        console.error("Error updating person: ", error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        return { success: false, error: `Failed to update person: ${errorMessage}` };
    }
}

export async function deletePerson(id: string): Promise<{ success: boolean, error?: string }> {
    try {
        await adminDb.collection('people').doc(id).delete();
        return { success: true };
    } catch (error) {
        console.error("Error deleting person: ", error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        return { success: false, error: `Failed to delete person: ${errorMessage}` };
    }
}
