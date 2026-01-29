from fastapi import FastAPI
from pydantic import BaseModel
from prompt_engine import generate_prompt
from ai_provider import get_ai_response
from refinement_engine import refine_answer

app = FastAPI()

class Question(BaseModel):
    text: str

@app.post("/process")
def process_question(question: Question):
    prompt = generate_prompt(question.text)
    raw_answer = get_ai_response(prompt)
    final_answer = refine_answer(raw_answer)

    return {
        "original_question": question.text,
        "final_answer": final_answer
    }