/* =============================
      LOGIN ADMIN
============================= */
function login(e) {
    e.preventDefault();

    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if (user === "LATAM" && pass === "2013latam") {
        localStorage.setItem("admin", "true");
        window.location = "admin.html";
    } else {
        alert("❌ Usuario o contraseña incorrectos");
    }
}


/* =============================
      CARGAR PRODUCTOS CLIENTE
============================= */
async function cargarProductos() {
    const lista = document.getElementById("lista-productos");
    if (!lista) return;

    const res = await fetch("productos.json");
    const productos = await res.json();

    lista.innerHTML = "";

    productos.forEach(p => {
        lista.innerHTML += `
            <div class="producto">
                <h3>${p.nombre}</h3>
                <p style="font-size:20px;">💲${p.precio} MXN</p>
                <button onclick="comprar(${p.id})">Comprar</button>
            </div>
        `;
    });
}


/* =============================
      REALIZAR COMPRA
============================= */
async function comprar(id) {
    const res = await fetch("productos.json");
    const productos = await res.json();
    const p = productos.find(x => x.id === id);

    if (!p) return alert("Error cargando producto");

    const jugadorID = prompt("Ingresa tu ID de Free Fire:");
    if (!jugadorID) return;

    const nombre = prompt("Ingresa tu nombre:");
    if (!nombre) return;

    // WhatsApp del vendedor
    const whatsapp = "526688365695";

    // Mensaje automático
    const mensaje = `Hola, vengo de LATAM STORE.%0A%0A` +
        `📌 *Pedido de Diamantes*%0A` +
        `💎 *Producto:* ${p.nombre}%0A` +
        `💲 *Precio:* ${p.precio} MXN%0A` +
        `🆔 *ID:* ${jugadorID}%0A` +
        `👤 *Nombre:* ${nombre}%0A%0A` +
        `Ya realicé mi pago, aquí está mi comprobante.`;

    // Abrir WhatsApp automáticamente
    window.open(`https://wa.me/${whatsapp}?text=${mensaje}`, "_blank");
}


/* =============================
      ADMIN - MOSTRAR PRODUCTOS
============================= */
async function cargarProductosAdmin() {
    if (!localStorage.getItem("admin")) {
        alert("Acceso denegado");
        window.location = "login.html";
        return;
    }

    const cont = document.getElementById("admin-productos");
    const res = await fetch("productos.json");
    const productos = await res.json();

    cont.innerHTML = "";

    productos.forEach(p => {
        cont.innerHTML += `
            <div class="producto" style="padding:15px;">
                <h3>${p.nombre}</h3>
                <p>Precio actual: ${p.precio} MXN</p>
                <input id="precio${p.id}" type="number" placeholder="Nuevo precio" style="padding:5px;">
                <button onclick="actualizarPrecio(${p.id})">Actualizar</button>
            </div>
        `;
    });
}


/* =============================
      ADMIN - ACTUALIZAR PRECIO
============================= */
async function actualizarPrecio(id) {
    alert("⚠ GitHub Pages NO permite guardar cambios automáticos.\n\nDebes editar manualmente el archivo productos.json 🙏");

    // Si quieres guardar en vivo, te hago una versión con Firebase.
}
