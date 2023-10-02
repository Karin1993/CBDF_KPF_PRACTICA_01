const express = require('express');
const app = express();
const puerto = process.env.PORT || 3003;
app.use(express.json())

/********************************************************************************************************/
//Arreglo de objeto de tareas

let tareas = [
    {id:1, 
    idProyecto:"1", 
    nombreTarea:"Practica 1 - CBDF", 
    descripcion:"Desarrollo de una API para Gestión de Proyectos y Tareas", 
    fechaAsignacion:"25/09/23", 
    estado:"En progreso"},
];

// Obtener lista de todas las tareas
app.get('/socios/v1/tareas', (req, res) => {
    // Verificar si existen tareas
    if (tareas.length > 0) {
        res.status(200).json({
            estado: 1,
            mensaje: "Existen tareas",
            tareas: tareas
        })
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: "No existen tareas",
            tareas: tareas
        })
    }
    // Si existen, mostrar estado y mensaje
})

// Obtener tarea por su id
app.get('/socios/v1/tareas/:id', (req, res) => {
    // Solo una tarea
    const id = req.params.id;
    // Programación Funcional
    const tarea = tareas.find(tarea => tarea.id == id)
    // Si se encontró una tarea
    if (tarea) {
        res.status(200).json({
            estado: 1,
            mensaje: "Tarea encontrada",
            tarea: tarea
        })

    } else {
        // No se encontró una tarea
        res.status(404).json({
            estado: 0,
            mensaje: "No se encontró la tarea",
            tarea: {}
        })
    }
    // Programación Estructurada
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
    }
    res.send('Mostrar una tarea por su id');
})

// Agregar nueva tarea
app.post('/socios/v1/tareas', (req, res) => {
    // Crear un recurso - tarea
    // id = Generar un número aleatorio
    // Nombre y descripción = Body
    const { idProyecto, nombreTarea, descripcion, fechaAsignacion, estado } = req.body;
    const id = Math.round(Math.random() * 1000);
    // Comprobar que el cliente(navegador) = usuario = programador
    if (idProyecto == undefined || nombreTarea == undefined || descripcion == undefined || 
        fechaAsignacion == undefined || estado == undefined) {
        // Hay un error en la solicitud por parte del usuario
        res.status(400).json({
            estado: 0,
            mensaje: "BAD REQUEST - Favor de llenar los campos correctamente"
        })
    } else {
        // En JavaScript cómo agregar una nueva tarea a un arreglo
        const tarea = { id: id, idProyecto: idProyecto, nombreTarea: nombreTarea, descripcion: descripcion,
        fechaAsignacion: fechaAsignacion, estado: estado };
        const longitudInicial = tareas.length;
        tareas.push(tarea)
        if (tareas.length > longitudInicial) {
            // Si se agregó una tarea todo OK
            res.status(201).json({
                estado: 1,
                mensaje: "Tarea creada",
                tarea: tarea
            })
        } else {
            // Error del servidor al no poder crearse la tarea
            res.status(500).json({
                estado: 0,
                mensaje: "Tarea no creada por un error desconocido",
                tarea: tarea
            })
        }
    }
    res.send('Crear una tarea');
})

// Actualizar una tarea por su id
app.put('/socios/v1/tareas/:id', (req, res) => {
    // Actualizar un recurso - Actualizar una tarea
    const { id } = req.params;
    const { idProyecto, nombreTarea, descripcion, fechaAsignacion, estado } = req.body;
    if (idProyecto == undefined || nombreTarea == undefined || descripcion == undefined || 
        fechaAsignacion == undefined || estado == undefined) {
        res.status(400).json({
            estado: 0,
            mensaje: "Faltan parámetros en la solicitud"
        })
    }
    else {
        const posActualizar = tareas.findIndex(tarea => tarea.id == id)
        if (posActualizar != -1) {
            // Si encontró la tarea con el id buscado
            // Actualizar la tarea
            tareas[posActualizar].idProyecto = idProyecto;
            tareas[posActualizar].nombreTarea = nombreTarea;
            tareas[posActualizar].descripcion = descripcion;
            tareas[posActualizar].fechaAsignacion = fechaAsignacion;
            tareas[posActualizar].estado = estado;
            res.status(200).json({
                estado: 1,
                mensaje: "Tarea actualizada",
                tarea: tareas[posActualizar]
            })
        }
        else {
            // No se encontró la tarea del id buscado
            res.status(404).json({
                estado: 0,
                mensaje: "Tarea no encontrada"
            })
        }
    }
    res.send('Actualizar una tarea por su id');
})

// Eliminar una tarea por su id
app.delete('/socios/v1/tareas/:id', (req, res) => {
    const id = req.params.id;
    const tareaToDelete = tareas.find(tarea => tarea.id == id);
    // Verificar si la tarea existe
    if (!tareaToDelete) {
        return res.status(404).json({
            estado: 0,
            mensaje: "Tarea no encontrada",
            tarea: {}
        });
    }
    // Realizar la eliminación de la tarea
    const indice = tareas.indexOf(tareaToDelete);
    tareas.splice(indice, 1);

    res.status(200).json({
        estado: 1,
        mensaje: "Tarea eliminada con éxito",
        tarea: tareaToDelete
    });
})

/*****************************************************************************************************/
// Arreglo de objeto de proyectos
let proyectos = [
    {
        id: 1,
        nombreProyecto: "Practica 1 - CBDF",
        descripcion: "Desarrollo de una API para Gestión de Proyectos y Tareas",
        fechaInicio: "25/09/23",
        fechaFinal: "30/09/23"
    },
];

// Obtener lista de todos los proyectos
app.get('/socios/v1/proyectos', (req, res) => {
    // Verificar si existen proyectos
    if (proyectos.length > 0) {
        res.status(200).json({
            estado: 1,
            mensaje: "Existen proyectos",
            proyectos: proyectos
        })
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: "No existen proyectos",
            proyectos: proyectos
        })
    }
    // Si existen, mostrar estado y mensaje
})

// Obtener proyecto por su id
app.get('/socios/v1/proyectos/:id', (req, res) => {
    // Solo un proyecto
    const id = req.params.id;
    // Programación Funcional
    const proyecto = proyectos.find(proyecto => proyecto.id == id)
    // Si se encontró un proyecto
    if (proyecto) {
        res.status(200).json({
            estado: 1,
            mensaje: "Proyecto encontrado",
            proyecto: proyecto
        })

    } else {
        // No se encontró un proyecto
        res.status(404).json({
            estado: 0,
            mensaje: "No se encontró el proyecto",
            proyecto: {}
        })
    }
    // Programación Estructurada
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
    }
    res.send('Mostrar un proyecto por su id');
})

// Agregar nuevo proyecto
app.post('/socios/v1/proyectos', (req, res) => {
    // Crear un recurso - proyecto
    // id = Generar un número aleatorio
    // Nombre y descripción = Body
    const { nombreProyecto, descripcion, fechaInicio, fechaFinal } = req.body;
    const id = Math.round(Math.random() * 1000);
    // Comprobar que el cliente(navegador) = usuario = programador
    if (nombreProyecto == undefined || descripcion == undefined || 
        fechaInicio == undefined || fechaFinal == undefined) {
        // Hay un error en la solicitud por parte del usuario
        res.status(400).json({
            estado: 0,
            mensaje: "BAD REQUEST - Favor de llenar los campos correctamente"
        })
    } else {
        // En JavaScript cómo agregar un nuevo proyecto a un arreglo
        const proyecto = { id: id, nombreProyecto: nombreProyecto, descripcion: descripcion,
        fechaInicio: fechaInicio, fechaFinal: fechaFinal };
        const longitudInicial = proyectos.length;
        proyectos.push(proyecto)
        if (proyectos.length > longitudInicial) {
            // Si se agregó un proyecto todo OK
            res.status(201).json({
                estado: 1,
                mensaje: "Proyecto creado",
                proyecto: proyecto
            })
        } else {
            // Error del servidor al no poder crearse el proyecto
            res.status(500).json({
                estado: 0,
                mensaje: "Proyecto no creado por un error desconocido",
                proyecto: proyecto
            })
        }
    }
    res.send('Crear un proyecto');
})

// Actualizar un proyecto por su id
app.put('/socios/v1/proyectos/:id', (req, res) => {
    // Actualizar un recurso - Actualizar un proyecto
    const { id } = req.params;
    const { nombreProyecto, descripcion, fechaInicio, fechaFinal } = req.body;
    if (nombreProyecto == undefined || descripcion == undefined || 
        fechaInicio == undefined || fechaFinal == undefined) {
        res.status(400).json({
            estado: 0,
            mensaje: "Faltan parámetros en la solicitud"
        })
    }
    else {
        const posActualizar = proyectos.findIndex(proyecto => proyecto.id == id)
        if (posActualizar != -1) {
            // Si encontró el proyecto con el id buscado
            // Actualizar el proyecto
            proyectos[posActualizar].nombreProyecto = nombreProyecto;
            proyectos[posActualizar].descripcion = descripcion;
            proyectos[posActualizar].fechaInicio = fechaInicio;
            proyectos[posActualizar].fechaFinal = fechaFinal;
            res.status(200).json({
                estado: 1,
                mensaje: "Proyecto actualizado",
                proyecto: proyectos[posActualizar]
            })
        }
        else {
            // No se encontró el proyecto del id buscado
            res.status(404).json({
                estado: 0,
                mensaje: "Proyecto no encontrado"
            })
        }
    }
    res.send('Actualizar un proyecto por su id');
})

// Eliminar un proyecto por su id
app.delete('/socios/v1/proyectos/:id', (req, res) => {
    const id = req.params.id;
    const proyectoToDelete = proyectos.find(proyecto => proyecto.id == id);
    // Verificar si el proyecto existe
    if (!proyectoToDelete) {
        return res.status(404).json({
            estado: 0,
            mensaje: "Proyecto no encontrado",
            proyecto: {}
        });
    }
    // Realizar la eliminación del proyecto
    const indice = proyectos.indexOf(proyectoToDelete);
    proyectos.splice(indice, 1);

    res.status(200).json({
        estado: 1,
        mensaje: "Proyecto eliminado con éxito",
        proyecto: proyectoToDelete
    });
})

/***********************************************************************************************/
// Mostrar todas las tareas de un proyecto
app.get('/socios/v1/proyectos/:idProyecto/tareas', (req, res) => {
    const idProyecto = req.params.idProyecto;
    const tareasProyecto = tareas.filter(tarea => tarea.idProyecto == idProyecto);
    if (tareasProyecto.length > 0) {
        res.status(200).json({
            estado: 1,
            mensaje: "Todas las tareas del proyecto",
            tareas: tareasProyecto
        });
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: "No existen tareas para este proyecto",
            tareas: []
        });
    }
});

// Mostrar una tarea específica de un proyecto
app.get('/socios/v1/proyectos/:idProyecto/tareas/:idTarea', (req, res) => {
    const idProyecto = req.params.idProyecto;
    const idTarea = req.params.idTarea;
    const tarea = tareas.find(tarea => tarea.id == idTarea && tarea.idProyecto == idProyecto);
    if (tarea) {
        res.status(200).json({
            estado: 1,
            mensaje: "Tarea encontrada en el proyecto",
            tarea: tarea
        });
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: "No se encontró la tarea en el proyecto",
            tarea: {}
        });
    }
});

// Mostrar tareas de un proyecto por estado (Usando Query String para el estado)
app.get('/socios/v1/proyectos/:idProyecto/tareas-por-estado', (req, res) => {
    const idProyecto = req.params.idProyecto;
    const estado = req.query.estado;
    const tareasProyectoPorEstado = tareas.filter(tarea => tarea.idProyecto == idProyecto 
        && tarea.estado == estado);
    if (tareasProyectoPorEstado.length > 0) {
        res.status(200).json({
            estado: 1,
            mensaje: `Tareas del proyecto con estado '${estado}'`,
            tareas: tareasProyectoPorEstado
        });
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: `No existen tareas con estado '${estado}' para este proyecto`,
            tareas: []
        });
    }
});

// Mostrar todas las tareas de un proyecto paginadas (Usando Query String para especificar número de página 
// y cuántos registros por página)
app.get('/socios/v1/proyectos/:idProyecto/tareas-paginadas', (req, res) => {
    const idProyecto = req.params.idProyecto;
    const pagina = parseInt(req.query.pagina) || 1;
    const porPagina = parseInt(req.query.porPagina) || 10;
    const inicio = (pagina - 1) * porPagina;
    const fin = inicio + porPagina;
    const tareasProyectoPaginadas = tareas.filter(tarea => tarea.idProyecto == idProyecto).slice(inicio, fin);
    if (tareasProyectoPaginadas.length > 0) {
        res.status(200).json({
            estado: 1,
            mensaje: `Tareas del proyecto (Página ${pagina})`,
            tareas: tareasProyectoPaginadas
        });
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: `No existen tareas en esta página para este proyecto`,
            tareas: []
        });
    }
});

// Mostrar tareas de un proyecto por fecha de inicio (Usando Query String para la fecha de inicio)
app.get('/socios/v1/proyectos/:idProyecto/tareas-por-fecha', (req, res) => {
    const idProyecto = req.params.idProyecto;
    const fechaInicio = req.query.fechaInicio;
    const tareasProyectoPorFecha = tareas.filter(tarea => tarea.idProyecto == idProyecto 
        && tarea.fechaAsignacion == fechaInicio);
    if (tareasProyectoPorFecha.length > 0) {
        res.status(200).json({
            estado: 1,
            mensaje: `Tareas del proyecto con fecha de inicio '${fechaInicio}'`,
            tareas: tareasProyectoPorFecha
        });
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: `No existen tareas con fecha de inicio '${fechaInicio}' para este proyecto`,
            tareas: []
        });
    }
});

/******************************************************************************************************/

app.listen(puerto,()=>{
    console.log('Servidor corriendo en el puerto: ', puerto);

})