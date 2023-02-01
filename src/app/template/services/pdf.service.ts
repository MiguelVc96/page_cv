import { Injectable } from '@angular/core';
import { Storage, getStorage, ref, getDownloadURL } from '@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private storege: Storage) { }

  /**
   * Metodo para descargar pdf obteniendo la informacion desde firebases
   */
  downloadCv(){
    const storage = getStorage();
    const starsRef = ref(storage, 'gs://project-cv-7cee1.appspot.com/C.V. - Miguel Valencia.pdf');

    // Get the download URL
    getDownloadURL(starsRef)
    .then((url) => {
      console.log(url);
      window.open(url, '_blank')?.focus();
    })
    .catch((error) => {

      switch (error.code) {
        case 'storage/object-not-found':
          console.log("File doesn't exist")
          break;
        case 'storage/unauthorized':
          console.log("User doesn't have permission to access the object")
          break;
        case 'storage/canceled':
          console.log("User canceled the upload")
          break;

        case 'storage/unknown':
          console.log("Unknown error occurred, inspect the server response")
          break;
      }
    });

  }


  /**
   * Forma local
   * Creamos una etiqueta a trabajando desde el DOOm
   * El siguente codigo representa:
   * <a href="liga del pdf" target="_blank" download="Nombre del archivo"></a>
   *
   */
  downloadFile(){
    const downloadInstance = document.createElement('a');
    downloadInstance.href = 'https://firebasestorage.googleapis.com/v0/b/project-cv-7cee1.appspot.com/o/CV_Miguel_Valencia.pdf?alt=media&token=8b2d0c89-329b-4564-8c8a-eb1b543556c5';
    //downloadInstance.href = 'http://millencia.com/document/pdf/prueba.pdf';
    downloadInstance.target = '_blank';
    downloadInstance.download = 'Miguel Valencia-Cv';

    document.body.appendChild(downloadInstance);
    downloadInstance.click();
    document.body.removeChild(downloadInstance);
  }

}
