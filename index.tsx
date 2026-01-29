import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submit = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:8000/process", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: question })
    });
    const data = await res.json();
    localStorage.setItem("result", JSON.stringify(data));
    router.push("/result");
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <textarea
        className="w-2/3 p-4 border rounded"
        placeholder="اكتب سؤالك هنا..."
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={submit} className="mt-4 px-6 py-2 bg-blue-600 text-white">
        حسّن سؤالي
      </button>
      {loading && <p className="mt-2">جارٍ تجهيز الإجابة…</p>}
    </main>
  );
}