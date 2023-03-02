// Rutas de Eventos / Events
// host + /api/events


const { Router } = require('express');
const {check} = require('express-validator')

const {isDate} = require('../helpers/isDate')
const {validarCampos} = require('../middlewares/validar-campos')
const {validarJWT} = require('../middlewares/validar-jwt')

const {getEventos,crearEvento,actualizarEvento,eliminarEvento} = require('../controllers/events')
const router = Router();
//Todas las rutas deben ser validadas
router.use(validarJWT)

//Obtener eventos
router.get('/', getEventos);


//Crear un evento
router.post('/',[
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatoria').custom(isDate),
    check('end','Fecha de finalización es obligatoria').custom(isDate),
    validarCampos
] ,crearEvento);

//Actualiza evento
router.put('/:id',[
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatoria').custom(isDate),
    check('end','Fecha de finalización es obligatoria').custom(isDate),
    validarCampos
], actualizarEvento);


//Borrar evento
router.delete('/:id', eliminarEvento);


module.exports =router;