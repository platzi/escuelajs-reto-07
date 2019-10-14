# escuelajs-reto-07
Reto 7 Octubre 12: Curso de React Router y Redux

## Platzi Store

Platzi Conf Bogotá 2019 es el evento en Latinoamérica para quienes crean tecnología: diseño, programación, marketing, startups y entusiastas. queremos por lanzar un sitio web llamado "Platzi Store" donde tendremos la lista de los productos que puedes adquirir en la tienda oficial de Platzi.

![PlatziStore](https://raw.githubusercontent.com/platzi/escuelajs-reto-07/master/screenshot.png?token=ACQQY5Q5RCV7DKKM3PP2X7S5VKKUS)

### Instalación
```
npm install
```

### Ejecución
```
npm run start
```

### Compilar
```
npm run build
```


## Documentación

### src/index.js:
Archivo inicial de al aplicación, en este archivo creamos el store por medio del createStore de Redux. Inicializamos el estado por medio de una función llamada prepareInitialState para agregar los estados locales, en este caso (totalCost) para llevar el control de costo total de los productos agregados al carrito de compras.

```

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import App from './routes/App';
import reducer from './reducers';

const initialState = {...
};

const prepareInitialState = (state) => {
  return {
    ...state,
    totalCost: 0
  }
}

const customInitialState = prepareInitialState(initialState);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, customInitialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
```

### Products.jsx
Componente de React encargado de mostrar la lista de los productos disponibles y la opción de agregar a  carrito de compras por medio del botón comprar, este botón esta asociado a un flujo de Redux el cual desencadena dos eventos llamados 'addToCart' y 'plusToTotalCart' encargados de actualizar los items seleccionados en el carro de comprar y actualizar el total del costo de lostiems respectivamente.

```

const Products = (props) => {
  const { products } = props;

  const handleAddToCart = (product) => {
    props.addToCart(product);
    props.plusToTotalCost(product.price);
  }

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <div className="Products-item" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="Products-item-info">
              <h2>
                {product.title}
                <span>
                  $
                  {product.price}
                </span>
              </h2>
              <p>{product.description}</p>
            </div>
            <button type="button" onClick={() => handleAddToCart(product)}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart,
  plusToTotalCost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
```


### Checkout.jsx

Componente de React encargado de mostrar los productos seleccionados como opción de compra y el total del costo de los productos. Este componente utiliza otro componente llamado 'CheckoutItem' para pintar cada item seleccionado. Este componente esta asociado a un flujo de Redux para actualizarse cuando se elimine un producto.

```

const Products = (props) => {
  const { products } = props;

  const handleAddToCart = (product) => {
    props.addToCart(product);
    props.plusToTotalCost(product.price);
  }

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <div className="Products-item" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="Products-item-info">
              <h2>
                {product.title}
                <span>
                  $
                  {product.price}
                </span>
              </h2>
              <p>{product.description}</p>
            </div>
            <button type="button" onClick={() => handleAddToCart(product)}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart,
  plusToTotalCost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
```

### CheckoutItem
Componente de React encargado de pintar el producto seleccionado en la lista de pedidos. Este componente esta asociado a un flujo de Redux con los evento 'deleteFromCart' y 'removeFromTotalCost' encargados de eliminar un producto de la lista de pedidos y actualizar el precio total respectivamente.

```

const Products = (props) => {
  const { products } = props;

  const handleAddToCart = (product) => {
    props.addToCart(product);
    props.plusToTotalCost(product.price);
  }

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <div className="Products-item" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="Products-item-info">
              <h2>
                {product.title}
                <span>
                  $
                  {product.price}
                </span>
              </h2>
              <p>{product.description}</p>
            </div>
            <button type="button" onClick={() => handleAddToCart(product)}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart,
  plusToTotalCost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
```

## RETO

### Primer problema
Antes de lanzar Platzi Store, es necesario añadir la pagina 404.

1) Crear un nuevo container llamado "NotFound".
2) Añade NotFound al archivo de rutas.
3) Prueba que funcione correctamente el componente NotFound.

### Segundo Problema
Necesitamos hacer pruebas dentro de nuestro proyecto utilizando Redux DevTools.

1) Añade la configuración necesaria poder utilizar Redux DevTools.
2) Prueba el flujo de tu aplicación con Redux DevTools.
3) Ejecuta el comando "npm run lint" y repara los errores encontrados.

### Tercer Problema
El boton de Eliminar no esta funcionando correctamente en la pagina del Checkout analiza los errores y propon una solución.

1) Crear, Actions, Reducers y actualizar el estado correctamente.

### Cuarto Problema (Opcional)
Dentro del checkout debemos mostrar el total del precio.

1) Analiza la aplicación y añade la suma del total de todos los items seleccionados.

### Enviar solución de reto
Debes de crear un "Fork" de este proyecto, revolver los problemas y crear un Pull Request hacia este repositorio.

### Contribuir
Si alguien quiere agregar o mejorar algo, lo invito a colaborar directamente en este repositorio: [escuelajs-reto-07](https://github.com/platzi/escuelajs-reto-07/)

### Licencia
escuelajs-reto-06 se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).
