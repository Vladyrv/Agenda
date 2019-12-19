var Usuario = require('./modelUsuarios.js') //Asignarle a la variable USUARIO el modelo del usuario

module.exports.crearUsuarioDemo = function(callback){ //Función para crear usuarios
  var arr = [{ email: 'user@mail.com', user: "user", password: "123456"}, { email: 'maria@mail.com', user: "maria", password: "123456"}]; //array con la información de los usuarios a insertar
  Usuario.insertMany(arr, function(error, docs) { //Utilizar la función insertMany para insertar varios registros en una sola consulta
    if (error){ //Acciones si existe un error
      if (error.code == 11000){ //Verificar si el nombre de usuario (PrimaryKey) del existe
        callback("Utilice los siguientes datos: </br>usuario: user | password:123456 </br>usuario: maria | password:123456") //Mostrar mensaje
      }else{
        callback(error.message) //Mostrar mensaje de error
      }
    }else{
      callback(null, "El usuario 'user' y 'maria' se ha registrado correctamente. </br>usuario: user | password:123456 </br >usuario: user | password:123456") //Mostrar mensaje del usuario guardado con exito
    }
  });
}
