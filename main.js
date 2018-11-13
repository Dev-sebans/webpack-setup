import style from './main.css';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const appName = 'Webpack Demo App';
setTimeout(
  () => alert(`Thanks for using ${appName}`)
, 500);

ClassicEditor
    .create( document.querySelector( '#editor' ) )
    .then( editor => {
        console.log( editor );
    } )
    .catch( error => {
        console.error( error );
    } );