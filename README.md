# Inventario
> Inventario en Symfony 5

Preview
<img src="https://github.com/HTMyName/inventario_v2/blob/main/preview.png">

## Requerimientos
1. Composer
2. PHP >= 7.2

## Instalación
1. Instalar las dependencias del proyecto
```sh
composer install
```

2. Configurar el archivo .env
```
Escribe el usuario y contraseña de tu base de datos
```

3. Generar la Base de Datos MySql y las tablas
```sh
php bin/console doctrine:database:create
``` 
```sh
php bin/console doctrine:schema:update --force
```
4. Ejecutar Proyecto
```sh
php bin/console server:run
``` 

5. Ingresar a la url:
> *localhost:8000* [Entrar](http://localhost:8000)
