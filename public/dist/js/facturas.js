class Carrito {
  constructor (articulo) {
    this._articulo = articulo
    this._carrito = {}
  }

  agregar (articulo, cantidad) {
    if (this._carrito[articulo] >= 1) {
      this._carrito[articulo] += cantidad
    } else {
      this._carrito[articulo] = cantidad
    }
  }

  cantidad (articulo) {
    return this._carrito[articulo]
  }

  quitar (articulo, cantidad) {
    if (this._carrito[articulo] > 0) this._carrito[articulo] -= cantidad
  }

  eliminar (articulo) {
    delete this._carrito[articulo]
  }

  _iterable () {
    let message = 'Carrito: \n'
    for (const key in this._carrito) message += `\t${this._carrito[key]} ${key}\n`
    return message
  }

  ver (articulo = 'todos') {
    if (articulo === 'todos') {
      return this._iterable()
    } else {
      // eslint-disable-next-line no-prototype-builtins
      if (this._carrito.hasOwnProperty(articulo)) {
        return `${this._carrito[articulo]} hay ${articulo}`
      } else {
        return `El articulo ${articulo} no existe en el Carrito`
      }
    }
  }
}

let carritoP = new Carrito('Productos')
let carritoS = new Carrito('Servicios')

function getProduct (id) {

  let fila = document.getElementById(id + '_product')
  let add = document.getElementById(id + '_cant').value
  add = parseInt(add)

  let name = fila.childNodes[1].outerText
  let model = fila.childNodes[3].outerText
  let serie = fila.childNodes[5].outerText
  //let precio = fila.childNodes[7].outerText
  let cant = fila.childNodes[9].outerText

  if (add <= cant && carritoP.cantidad(id) == undefined || carritoP.cantidad(id) + add <= cant) {
    carritoP.agregar(id, add)
    if (carritoP.cantidad(id) >= cant || cant == 1) {
      fila.style.display = 'none'
    }
    printProduct(id, name, model, serie, carritoP.cantidad(id))
  } else {
    showAlert('error', 'No se pudo añadir el producto', 'Error')
  }
  //console.log(carritoP)
}

function printProduct (id, name, model, serie, cant) {
  let liProducto = document.getElementById(id + name)
  if (liProducto != null) {
    removeP(id, name)
  }
  let ul = document.getElementById('product-list')

  let li = document.createElement('LI')
  li.setAttribute('class', 'list-group-item border-top-0 border-left-0 border-right-0')
  li.setAttribute('id', id + name)
  li.innerHTML = name + ' ' + model + ' ' + serie + ' - ' + cant

  let btn_del = document.createElement('BUTTON')
  btn_del.setAttribute('class', 'btn btn-outline-danger btn-xs float-right')
  btn_del.setAttribute('style', 'min-width: 30px')
  btn_del.setAttribute('type', 'button')
  btn_del.setAttribute('onclick', 'removePbtn(\'' + id + '\',\'' + name + '\')')

  let icon = document.createElement('I')
  icon.setAttribute('class', 'fas fa-minus')

  let producto = document.createElement('INPUT')
  let uniqueID = id + name + 'input'
  producto.setAttribute('id', uniqueID)
  producto.setAttribute('type', 'hidden')
  producto.setAttribute('name', `productsArray[${id}]`)
  producto.setAttribute('value', '' + cant + '')

  li.appendChild(btn_del)
  btn_del.appendChild(icon)
  ul.appendChild(li)
  ul.appendChild(producto)

}

function removeP (id, name) {
  let list = document.getElementById(id + name)
  list.remove()
  let producto = document.getElementById(id + name + 'input')
  producto.remove()
}

function removePbtn (id, name) {
  let list = document.getElementById(id + name)
  list.remove()
  let producto = document.getElementById(id + name + 'input')
  producto.remove()
  carritoP.eliminar(id)
  let fila = document.getElementById(id + '_product')
  if (fila.style.display == 'none') {
    fila.style.display = 'table-row'
  }
}

function getService (id) {

  let fila = document.getElementById(id + '_service')
  let add = document.getElementById(id + '_cantser').value
  add = parseInt(add)
  let name = fila.childNodes[1].outerText
  carritoS.agregar(id, add)
  printService(id, name, carritoS.cantidad(id))

}

function printService (id, name, cant) {
  let liService = document.getElementById(id + name + 'service')
  if (liService != null) {
    removeS(id, name)
  }
  let ul = document.getElementById('service-list')

  let li = document.createElement('LI')
  li.setAttribute('class', 'list-group-item border-top-0 border-left-0 border-right-0')
  li.setAttribute('id', id + name + 'service')
  li.innerHTML = name + ' - ' + cant

  let btn_del = document.createElement('BUTTON')
  btn_del.setAttribute('class', 'btn btn-outline-danger btn-xs float-right')
  btn_del.setAttribute('style', 'min-width: 30px')
  btn_del.setAttribute('type', 'button')
  btn_del.setAttribute('onclick', 'removeSbtn(\'' + id + '\',\'' + name + '\')')

  let icon = document.createElement('I')
  icon.setAttribute('class', 'fas fa-minus')

  let servicio = document.createElement('INPUT')
  servicio.setAttribute('id', id + name + 'inputservice')
  servicio.setAttribute('type', 'hidden')
  servicio.setAttribute('name', `servicesArray[${id}]`)
  servicio.setAttribute('value', '' + cant + '')

  li.appendChild(btn_del)
  btn_del.appendChild(icon)
  ul.appendChild(li)
  ul.appendChild(servicio)
}

function removeS (id, name) {
  let list = document.getElementById(id + name + 'service')
  list.remove()
  let servicio = document.getElementById(id + name + 'inputservice')
  servicio.remove()
}

function removeSbtn (id, name) {
  let list = document.getElementById(id + name + 'service')
  list.remove()
  let servicio = document.getElementById(id + name + 'inputservice')
  servicio.remove()
  carritoS.eliminar(id)
}

function showAlert (type, msg, title) {
  toastr.options = {
    'closeButton': true,
    'debug': false,
    'newestOnTop': false,
    'progressBar': true,
    'positionClass': 'toast-top-right',
    'preventDuplicates': true,
    'onclick': null,
    'showDuration': '300',
    'hideDuration': '1000',
    'timeOut': '3000',
    'extendedTimeOut': '1000',
    'showEasing': 'swing',
    'hideEasing': 'linear',
    'showMethod': 'fadeIn',
    'hideMethod': 'fadeOut'
  }

  toastr[type](msg, title)

}