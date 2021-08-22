function delUser (id, name) {

  if (confirm('¿Estás seguro de eliminar al usuario ' + name + '? Esta acción no se puede revertir.')) {

    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest()

    } else {  // code for IE6, IE5
      xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
    }

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        window.location.assign('users')
      }
    }

    xmlhttp.open('GET', 'users/delete/' + id, false)
    xmlhttp.send()

  }
}

function delItem (id, marca, modelo) {

  if (confirm('¿Estás seguro de eliminar el producto de marca ' + marca + ' modelo: ' + modelo + '? Esta acción no se puede revertir.')) {

    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest()

    } else {  // code for IE6, IE5
      xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
    }

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        window.location.assign('items')
      }
    }

    xmlhttp.open('GET', 'items/delete/' + id, false)
    xmlhttp.send()

  }
}

function delClient (id, name) {

  if (confirm('¿Estás seguro de eliminar el cliente ' + name + '? Esta acción no se puede revertir.')) {

    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest()

    } else {  // code for IE6, IE5
      xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
    }

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        window.location.assign('client')
      }
    }

    xmlhttp.open('GET', 'client/delete/' + id, false)
    xmlhttp.send()

  }
}

function delServicio (id, name) {

  if (confirm('¿Estás seguro de eliminar el servicio ' + name + '? Esta acción no se puede revertir.')) {

    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest()

    } else {  // code for IE6, IE5
      xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
    }

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        window.location.assign('services')
      }
    }

    xmlhttp.open('GET', 'services/delete/' + id, false)
    xmlhttp.send()

  }
}

function delCotizacion (id, name) {

  if (confirm('¿Estás seguro de eliminar la cotización ' + name + '? Esta acción no se puede revertir.')) {

    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest()

    } else {  // code for IE6, IE5
      xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
    }

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        window.location.assign('cotizacion')
      }
    }

    xmlhttp.open('GET', 'cotizacion/delete/' + id, false)
    xmlhttp.send()

  }
}

function ganancia () {
  let precioC = document.getElementById('add_item_precioC')
  let precioV = document.getElementById('add_item_precioV')

  document.getElementById('auto-ganacias').innerHTML = (precioV.value - precioC.value).toFixed(2)

}

function getClient (event) {

  let run = true
  let xmlhttp

  //console.log(event.keyCode);
  if (event.keyCode === undefined) {
    run = false
  }
  if (event.keyCode === 37) {
    run = false
  }
  if (event.keyCode === 38) {
    run = false
  }
  if (event.keyCode === 39) {
    run = false
  }
  if (event.keyCode === 40) {
    run = false
  }

  if (run == true) {

    let client_datalist = document.getElementById('client_datalist')
    let data = document.getElementById('client_datalist_input').value

    if (data !== '') {
      if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest()

      } else {  // code for IE6, IE5
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
      }

      xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          if (this.responseText !== '') {
            client_datalist.innerHTML = this.responseText
          } else {
            client_datalist.innerHTML = '<option value=\'null\'>Sin resultados</option>'
          }

        }
      }

      xmlhttp.open('POST', 'get_user/' + data, true)
      xmlhttp.send()
    } else {
      client_datalist.innerHTML = '<option value=\'null\'>Sin resultados</option>'
    }
  }
}

function aceptarClient () {
  let client_datalist_input = document.getElementById('client_datalist_input')
  let cliente_telefono = document.getElementById('cliente_telefono')
  let id_cliente_visible = document.getElementById('id_cliente_input')
  let id_cliente_hidden = document.getElementById('factura_id_cliente')
  let select = document.getElementById('client_datalist')
  let selectedOption = select.options[select.selectedIndex]

  //id_cliente_hidden.value = selectedOption.value;

  if (selectedOption.value != 'null') {
    id_cliente_visible.value = selectedOption.text
    cliente_telefono.value = selectedOption.id
    id_cliente_hidden.innerHTML = '<option value="' + selectedOption.value + '">' + selectedOption.text + '</option>'
  } else {
    id_cliente_visible.value = client_datalist_input.value
    cliente_telefono.value = ''
    id_cliente_hidden.innerHTML = '<option value=""></option>'
  }
}

function delFactura (id) {

  let url = window.location.href
  let url2 = url

  if (url.includes('user_factura/')) {
    url = url.replace('user_factura', 'eliminar_factura')
  } else if (url.includes('user_factura_xcobrar')) {
    url = url.replace('user_factura_xcobrar', 'eliminar_factura/') + id
  } else if (url.includes('user_factura')) {
    url = url.replace('user_factura', 'eliminar_factura/') + id
  }

  if (confirm('¿Estás seguro de eliminar esta factura? Esta acción no se puede revertir.')) {

    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest()

    } else {  // code for IE6, IE5
      xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
    }

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        window.location.assign(url2)
      }
    }

    xmlhttp.open('POST', url, false)
    xmlhttp.send()

  }
}

function getFileJs () {
  let img = document.getElementById('add_item_imageFile_file')
  let labelimg = document.getElementById('label_for_img')
  labelimg.innerHTML = img.files[0].name
}

function getFileJsSystem () {
  let img = document.getElementById('system_imageFile_file')
  let labelimg = document.getElementById('label_for_img')
  labelimg.innerHTML = img.files[0].name
}