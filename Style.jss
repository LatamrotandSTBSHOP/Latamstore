body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: #0a0a0a;
    color: white;
}

header {
    background: #111;
    padding: 20px;
    box-shadow: 0px 0px 15px #ff00ff;
    text-align: center;
}

header h1 {
    color: #ff00ff;
    font-size: 32px;
    text-shadow: 0px 0px 10px #ff00ff;
}

nav a {
    margin: 0 15px;
    color: #ffffff;
    text-decoration: none;
    font-size: 18px;
    border-bottom: 2px solid transparent;
    padding-bottom: 5px;
}

nav a:hover {
    border-bottom: 2px solid #ff00ff;
    text-shadow: 0px 0px 10px #ff00ff;
}

/* Portada */
.portada {
    text-align: center;
    padding: 80px 20px;
}

.btn {
    display: inline-block;
    background: #ff00ff;
    padding: 12px 26px;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    text-decoration: none;
    box-shadow: 0px 0px 15px #ff00ff;
}

.btn:hover {
    box-shadow: 0px 0px 25px #ff00ff;
    transform: scale(1.05);
}

/* Productos */
.productos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
}

.producto {
    background: #111;
    padding: 20px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0px 0px 10px #ff00ff;
}

.producto h3 {
    color: #ff00ff;
    margin-bottom: 10px;
}

.producto button {
    background: #ff00ff;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    box-shadow: 0px 0px 10px #ff00ff;
}

.producto button:hover {
    box-shadow: 0px 0px 20px #ff00ff;
    transform: scale(1.1);
}
