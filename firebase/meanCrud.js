import {
    addDoc,
    collection,
    db,
    onSnapshot,
    query
} from "./firebase.js";
const createMean = async ({ aluno, media }) => {
    try {
        await addDoc(collection(db, "mean"), {

            aluno, media
        });
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

const getMeans = async (callback) => {
    try {

        const q = query(collection(db, "mean"));
        onSnapshot(q, callback);
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

export { createMean, getMeans };

