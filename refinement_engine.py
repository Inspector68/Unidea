def refine_answer(answer: str) -> str:
    # Prototype-level refinement
    cleaned = answer.strip()
    cleaned = cleaned.replace("In conclusion", "")
    return cleaned