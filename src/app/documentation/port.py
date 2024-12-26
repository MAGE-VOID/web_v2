import os
import pyperclip

separador = "==================================================" # Separador constante

def mostrar_estructura(ruta, prefijo=""):
    """Muestra la estructura de directorios similar al comando tree."""
    try:
        elementos = [e for e in os.listdir(ruta) if e != os.path.basename(__file__)]
        for i, elemento in enumerate(elementos):
            ruta_elemento = os.path.join(ruta, elemento)
            es_ultimo = i == len(elementos) - 1
            prefijo_actual = prefijo + ("└── " if es_ultimo else "├── ")
            print(prefijo_actual + elemento)
            if os.path.isdir(ruta_elemento):
                prefijo_siguiente = prefijo + ("    " if es_ultimo else "│   ")
                mostrar_estructura(ruta_elemento, prefijo_siguiente)
    except FileNotFoundError:
        print(f"Error: Ruta no encontrada: {ruta}")
    except PermissionError:
        print(f"Error: Permiso denegado para acceder a: {ruta}")
    except Exception as e:
        print(f"Error al listar el directorio {ruta}: {e}")

def procesar_archivos(ruta_base):
    """Procesa archivos .css, .tsx y .js, mostrando su contenido y copiándolo al portapapeles."""
    contenido_total = ""
    try:
        for ruta_actual, _, archivos in os.walk(ruta_base):
            for archivo in archivos:
                if archivo.endswith((".css", ".tsx", ".js")) and archivo != os.path.basename(__file__):
                    ruta_completa = os.path.join(ruta_actual, archivo)
                    with open(ruta_completa, "r", encoding="utf-8") as f:
                        contenido = f.read()
                        titulo = f"Archivo: {archivo}\nRuta Completa: {ruta_completa}\nContenido:\n{contenido}\n{separador}\n" # Se usa el separador
                        print(titulo)
                        contenido_total += titulo
    except FileNotFoundError:
        print(f"Error: Archivo no encontrado: {ruta_completa}")
    except Exception as e:
        print(f"Error al leer o procesar archivos: {e}")

    try:
        pyperclip.copy(contenido_total)
        print("Contenido copiado al portapapeles (usando pyperclip).")
    except pyperclip.PyperclipException:
        try:
            import subprocess
            subprocess.run("pbcopy", universal_newlines=True, input=contenido_total)
            print("Ese es todo el Contenido")
        except FileNotFoundError:
            print("Error: No se pudo copiar al portapapeles. Asegúrate de tener pyperclip instalado (pip install pyperclip) o un sistema compatible con pbcopy (macOS).")


if __name__ == "__main__":
    ruta_script = os.path.abspath(__file__)
    ruta_actual = os.path.dirname(ruta_script)
    print(f"Carpeta: {ruta_actual}")

    # Separador ANTES del tree
    print(separador) # Se usa el separador
    mostrar_estructura(ruta_actual)
    # Separador DESPUÉS del tree
    print(separador) # Se usa el separador

    procesar_archivos(ruta_actual)