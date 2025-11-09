# Visor de Personajes de Los Simpson  Simpsons

Una aplicación web interactiva creada con React y TypeScript que permite a los usuarios explorar el vasto universo de personajes de la icónica serie "Los Simpson". La aplicación consume datos de [The Simpsons API](https://thesimpsonsapi.com/) para mostrar información detallada de cada personaje.

## ✨ Características

- **Galería de Personajes:** Visualiza una amplia lista de personajes populares de la serie.
- **Paginación:** Navega fácilmente a través de las 60 páginas de personajes disponibles.
- **Detalles del Personaje:** Obtén información clave como la edad y el estado (vivo o fallecido) de cada personaje.
- **Diseño Responsivo:** Interfaz adaptable para una experiencia de usuario óptima en cualquier dispositivo.
- **Indicadores de Carga:** Retroalimentación visual mientras se cargan nuevos personajes.

## 🛠️ Tecnologías Utilizadas

Este proyecto fue construido utilizando tecnologías modernas del ecosistema de desarrollo web:

- **[React](https://react.dev/):** Biblioteca principal para construir la interfaz de usuario.
- **[TypeScript](https://www.typescriptlang.org/):** Para un código más robusto y mantenible con tipado estático.
- **[Vite](https://vitejs.dev/):** Herramienta de compilación y servidor de desarrollo rápido.
- **[React Router](https://reactrouter.com/):** Para la gestión de rutas en la aplicación.
- **[CSS Modules](https://github.com/css-modules/css-modules):** Para estilos encapsulados y sin colisiones a nivel de componente.

## 🚀 Cómo Empezar

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### Prerrequisitos

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema. Se recomienda usar un gestor de paquetes como `pnpm`, `npm` o `yarn`.

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2.  **Instala las dependencias:**
    Elige tu gestor de paquetes preferido.
    ```bash
    # Con pnpm (recomendado)
    pnpm install

    # Con npm
    npm install

    # Con yarn
    yarn install
    ```

3.  **Ejecuta el servidor de desarrollo:**
    ```bash
    pnpm dev
    ```

4.  **Abre la aplicación:**
    Abre tu navegador y visita http://localhost:5173 (o el puerto que Vite indique en tu terminal).

## 📄 API

Este proyecto utiliza la API pública y gratuita **The Simpsons API** para obtener todos los datos de los personajes.