def generate_prompt(user_question: str) -> str:
    return f"""
    Act as a senior expert.
    Task: Provide a clear, structured, and actionable response.
    Question: "{user_question}"
    Constraints:
    - No fluff
    - Practical steps
    - Professional tone
    Output: Structured sections with bullet points.
    """