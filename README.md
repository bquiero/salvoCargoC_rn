
Salvo Cargo App con React Native
================================

-----------
Descripción
-----------

Este proyecto contiene el código básico para crear la aplicación de salvo cargo con react native.

--------------
Pre-requisitos
--------------

Este proyecto necesita lo siguiente:
  - Un computador con linux, windows o mac
  - Tener instalado Node.js y npm
  - Tener instalado git
  - Conexión a internet para descargar los paquetes del proyecto
  - Tener instalado expo en su dispositivo móvil o tener instalado android studio con el API 23

Existen otros requisitos,  pero estos se descargarán con el paquete
--------------------------------------------
Instalar pre-requisitos
--------------------------------------------
Para instalar los pre-requisitos siga los siguientes pasos


#. Descargue e instale Node js y npm::

  Windows descargue node desde::
  
    https://nodejs.org/es/download/
    
  En Linux (debian, ubuntu y derivados) mediante la terminal (Crtl+Alt+t)::
  
    sudo apt install nodejs
    sudo apt install npm

#. Descargue e instale git::

  Windows descargue node desde::
  
    https://git-scm.com/downloads
    
  En Linux (debian, ubuntu y derivados) mediante la terminal (Crtl+Alt+t)::
  
    sudo apt install git

#. Alternativamente puede descargar hyper como consola o terminal (no es obligatorio)::

    https://hyper.is/
    
   Configure hyper, en shell escriba lo siguiente::
   
    shell: 'C:\\Program Files\\Git\\git-cmd.exe',
   
   En shellArgs escriba lo siguiente::
     
     shellArgs: ['-i'],

--------------------------------------------
Como construir el proyecto
--------------------------------------------

Para cargar y probar el proyecto abra una terminal o consola de comandos en un directorio de trabajo

#. Descarge react-native desde la terminal o consola con los siguientes comandos::

    npm install -g create-react-native-app
    npm install -g react-native-cli
   
   Recuerde utilizar en comando `sudo` si esta en un sistema operativo linux.
   
#. Descarge e instale expo::

    npm install -g expo-cli
   
   Recuerde utilizar en comando `sudo` si esta en un sistema operativo linux.   

#. Ahora ir al directorio donde queremos guardar nuestro proyecto::

#. Clone el proyecto desde github escribiendo en la terminal::

    git clone https://github.com/bquiero/salvoCargo_rn.git

#. Cambie de directorio a la carpeta del proyecto con::

    cd salvoCargo_rn

#. Instale las dependencia del proyecto con::

    npm install

#. Pruebe el proyecto utilizando en comando::

    npm start

#. Si el proyecto dice que falta un paqueto no el nombre <nombre_paquete>, haga lo siguiente::

  Instale react-native con::
  
     react-native
  
  Descargue el paquete con::
    
     npm install <nombre_paquete> --save
     react-native link

#. Si todo sale bien hasta debería en la consola aparecer un código qr y las indicaciones para construir en el dispositivo o ejecutar en el emulador::
