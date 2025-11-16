// LOGIN ADMIN SIN SERVIDOR
function login(e) {
    e.preventDefault();

    const u = document.getElementById("user").value;
    const p = document.getElementById("pass").value;

    if (u === "LATAM" && p === "2013latam") {
        localStorage.setItem("admin", "true");
        window.location = "admin.html";
    } else {
        alert("Datos incorrectos");
    }
}

// CARGAR PRODUCTOS EN freefire.html
async function cargarProductos() {
    const res = await fetch("productos.json");
    const data = await res.json();

    const cont = document.getElementById("lista-productos");
    if (!cont) return;

    cont.innerHTML = "";
    data.forEach(p => {
        cont.innerHTML += `
            <div class="producto">
                <h3>${p.nombre}</h3>
                <p>$${p.precio} MXN</p>
                <button onclick="comprar(${p.id})">Comprar</button>
            </div>
        `;
    });
}

// GUARDAR PEDIDO
async function comprar(id) {
    const pid = prompt("Ingrese su ID de Free Fire:");
    if (!pid) return;

    const res = await fetch("productos.json");
    const productos = await res.json();
    const producto = productos.find(x => x.id === id);

    const pedido = {
        producto: producto.nombre,
        precio: producto.precio,
        jugador: pid,
        fecha: new Date().toLocaleString()
    };

    const pedidosRes = await fetch("pedidos.json");
    const pedidos = await pedidosRes.json();

    pedidos.push(pedido);

    alert("Pedido generado.\nEnvíe el comprobante al WhatsApp.");
}

// ADMIN: mostrar productos
async function cargarProductosAdmin() {
    const res = await fetch("productos.json");
    const data = await res.json();

    const cont = document.getElementById("admin-productos");
    cont.innerHTML = "";

    data.forEach(p => {
        cont.innerHTML += `
            <div>
                <p>${p.nombre} - $${p.precio}</p>
                <input id="price${p.id}" type="number" placeholder="Nuevo precio">
                <button onclick="actualizarPrecio(${p.id})">Actualizar</button>
            </div>
        `;
    });
                 }
