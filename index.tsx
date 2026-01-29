const res = await fetch("https://unidea-backend.onrender.com/process", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ text: question })
});