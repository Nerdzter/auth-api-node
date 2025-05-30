const API = "http://127.0.0.1:3000/api";

let token = localStorage.getItem("token") || "";

function showMessage(msg, color = 'green') {
  const el = document.getElementById("message");
  if (el) {
    el.innerText = msg;
    el.style.color = color;
    el.style.fontWeight = 'bold';
    el.style.textAlign = 'center';
    el.style.marginTop = '10px';
  }
}


async function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    showMessage("⚠️ Preencha todos os campos!", "red");
    return;
  }

  try {
    const res = await fetch(`${API}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (res.status === 201) {
      showMessage("✅ Cadastro realizado! Redirecionando para login...", "green");
      setTimeout(() => window.location.href = "login.html", 2000);
    } else {
      showMessage("⚠️ " + (data.message || "Erro no cadastro"), "red");
    }
  } catch (error) {
    showMessage("❌ Erro ao conectar com o servidor", "red");
  }
}



async function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  if (res.status === 200) {
    localStorage.setItem("token", data.token);
    showMessage("✅ Login feito! Redirecionando...", "green");
    setTimeout(() => window.location.href = "success.html", 2500);
  } else {
    showMessage(data.message, "red");
  }
}


async function getProfile() {
  const res = await fetch(`${API}/profile`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  const data = await res.json();
  document.getElementById("responseBox").innerText = JSON.stringify(data, null, 2);
}
