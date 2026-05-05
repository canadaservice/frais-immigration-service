async function payer(){

  const res = await fetch("/api/pay", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
      phone: document.getElementById("phone").value,
      service: document.getElementById("service").value,
      country: document.getElementById("country").value
    })
  });

  const data = await res.json();

  document.getElementById("result").innerText =
    data.status === "SUCCESS"
    ? "Paiement confirmé"
    : "Vérifiez votre téléphone";
}
