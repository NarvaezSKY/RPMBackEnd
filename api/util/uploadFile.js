import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebase.js';

export const uploadFile = async (file) => {
    // Crear una referencia al archivo en Firebase Storage
    const fileRef = ref(storage, `/files/${file.originalname}_${Date.now()}`);

    // Configurar metadatos del archivo
    const fileMetadata = {
        contentType: file.mimetype
    };

    // Iniciar la carga del archivo a Firebase Storage
    const fileUploadPromise = uploadBytesResumable(
        fileRef,
        file.buffer,  // Utilizar el buffer directamente sin redimensionamiento
        fileMetadata
    );

    // Esperar a que la carga del archivo se complete
    await fileUploadPromise;

    // Obtener el URL de descarga del archivo
    const fileDownloadURL = await getDownloadURL(fileRef);

    // Retornar la información relevante
    return { ref: fileRef, downloadURL: fileDownloadURL };
}