export default function Result() {
  const data = JSON.parse(localStorage.getItem("result") || "{}");

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">الإجابة الاحترافية</h1>
      <pre className="whitespace-pre-wrap">{data.final_answer}</pre>
    </main>
  );
}