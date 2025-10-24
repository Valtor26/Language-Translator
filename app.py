import os
import json 
import google.generativeai as genai
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


try:
    genai.configure(api_key=os.environ["GEMINI_API_KEY"])
except KeyError:
    print("Error: GEMINI_API_KEY environment variable not set.")


model = genai.GenerativeModel('models/gemini-2.5-pro')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/process-text', methods=['POST'])
def process_text_from_ui():
    data = request.json
    user_text = data.get('user_text')
    target_lang = data.get('target_lang')

    if not user_text:
        return jsonify({"error": "No text provided"}), 400


    prompt = f"""
    Analyze the following text.
    Text: "{user_text}"
    
    Please provide a response *only* in a single, minified JSON object
    with three keys:
    1. "language": The identified language of the text.
    2. "alphabet": The writing system used (e.g., "Latin", "Cyrillic").
    3. "translation": The translation of the text into {target_lang}.
    """

    try:
        response = model.generate_content(prompt)
        ai_response_text = response.text.strip().strip("```json").strip("```")
        print(f"AI Raw Response: {ai_response_text}") 

        ai_data = json.loads(ai_response_text)
        
        return jsonify(ai_data)

    except Exception as e:
        print(f"Error calling Gemini or parsing JSON: {e}")
        return jsonify({"error": "Failed to process text with AI."}), 500


if __name__ == '__main__':
    app.run(debug=True)