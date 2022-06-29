//Ejercico 4 Javascript

//1.Una cadena de texto con tu Nombre
let nombre = "Eric";
//2. Otra cadena de texto con tu Apellido
let apellido = "Fraguas"; 
//3. Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}`
 //4.Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
 //5. Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
 //6. Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let longitudEstudiante = estudiante.length; 
//7. Una variable que contenga la primera letra del Nombre
let inicialNombre = nombre.charAt(0)
//8. Otra variable que contenga la última letra del Apellido
let inicialApellido = apellido.charAt(estudiante.lenght - 1)
//9. Una cadena de texto que elimine los espacios de la variable "estudiante"
let estudianteNoSpace = estudiante.replace(" ", "")
//10.Una variable booleana que diga si el Nombre está contenido
let includesNombre = estudiante.includes(nombre)


