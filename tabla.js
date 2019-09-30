export default class Tabla{
    constructor(tableArt,tableInfo){

        //Tabla de los Artículos
        this._tableArt = tableArt;
        //Tabla de la Información
        this._tableInfo = tableInfo;
        //Número de Artículos
        this._numArt = 0;
        //Precio total de todos los artículos
        this._precio = 0;
        //Vector de los artículos
        this._articulos = new Array(20);
        //Contador vector
        this._contadorV = 0;
        console.log(this._articulos);
    }

    _borrar(row,articulo){
        let btnBorrar = document.createElement("input");
        btnBorrar.type="button";
        btnBorrar.value = "Borrar";
        btnBorrar.className = "btn btn-danger";
        btnBorrar.addEventListener("click",()=>{
          this.borrarArticulo(row, articulo);
        });
        row.cells[5].innerHTML="";
        row.cells[5].appendChild(btnBorrar);
    }

    AgregarProducto(objArticulo){
      if(this._contadorV < 20){
        this._articulos[this._contadorV] = objArticulo;
        this._contadorV++;

      }else{
        alert('El máximo de artículos es de 20, no puede agregar más');
      }
     
    }
  
    //Agrega el artículo a la interfaz de la tabla
    AgregarEnTabla(articulo, objArticulo){
        //Creación de las filas y columnas

        
        let row = this._tableArt.insertRow(-1);
        let cellCodigo = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellPrecio = row.insertCell(2);
        let cellCantidad = row.insertCell(3);
        let cellDescripcion = row.insertCell(4);
        row.insertCell(5);
        

        cellCodigo.innerHTML = articulo.codigo;
        cellNombre.innerHTML = articulo.nombre;
        cellPrecio.innerHTML = articulo.precio;
        cellCantidad.innerHTML = articulo.cantidad;
        cellDescripcion.innerHTML = articulo.descripcion;
        this._borrar(row,articulo);
      

        
        this._numArt++; //Se aumenta el número de artículos totales

        
        this._precio += (articulo.precio * articulo.cantidad); //Se calcula el precio total de todos los artículos

        //Se imprime la información del total de artículos y el precio
        this._tableInfo.rows[0].cells[1].innerHTML = this._numArt;
        this._tableInfo.rows[1].cells[1].innerHTML = this._precio;

        //Se crea un objeto con toda la información del artículo
         objArticulo = {
            codigo: articulo.codigo,
            nombre: articulo.nombre,
            precio: articulo.precio,
            cantidad: articulo.cantidad,
            descipcion: articulo.descripcion
        };
        return objArticulo;
      
        //Se agrega el artículo al vector 

    }
    //Método para borrar un artículo
    borrarArticulo(row,articulo){
        let pos = this._buscarArticulo(articulo.codigo);
        this._articulos.splice(pos, 1);
        row.remove();
    }
    
    _buscarArticulo(codigo){
        let result = -1;
        this._articulos.forEach((articulo, index) =>{
          if(articulo.codigo===codigo){
            result = index;
            return;
          }
        });
    
        return result;
      }

      
}