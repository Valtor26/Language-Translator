##Live Demo 🔗
(Click Here) 👉(https://language-translator-8drp.onrender.com/)

## 💻 Tech Stack

- Python (Flask)
- HTML, CSS, JavaScript
- Google Gemini API
- Render (for deployment)

# AI Language Translator

A simple web application that uses the Gemini AI to identify the language, alphabet, and translate text. This project is built with a Python Flask backend and a simple HTML/CSS/JS frontend.

## Features

- **Language Identification:** Automatically detects the language of the input text.
- **Alphabet Detection:** Identifies the writing system (e.g., Latin, Devanagari).
- **Text Translation:** Translates the text into a user-selected language.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### 1. Prerequisites

You must have Python 3 installed on your system.

### 2. Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/Valtor26/Language-Translator.git](https://github.com/Valtor26/Language-Translator)
    cd Language-Translator
    ```

2.  **Create and activate a virtual environment:**

    ```bash
    # On macOS/Linux
    python3 -m venv venv
    source venv/bin/activate

    # On Windows
    python -m venv venv
    .\venv\Scripts\activate
    ```

3.  **Install the required libraries:**
    (This installs Flask, Gunicorn, and the Google AI library)

    ```bash
    pip install -r requirements.txt
    ```

4.  **Set your Environment Variable:**
    You must set your Gemini API key as an environment variable.

    - **On macOS/Linux:**
      ```bash
      export GEMINI_API_KEY='YOUR_API_KEY_HERE'
      ```
    - **On Windows (Command Prompt):**
      ```bash
      set GEMINI_API_KEY=YOUR_API_KEY_HERE
      ```

### 3. Running the Application

With your virtual environment active and your API key set, run the Flask server:

```bash
python app.py
```

Open your web browser and go to http://127.0.0.1:5000 to see the application live.

How to Use
Type or paste any text into the text area.

Select a target language from the dropdown menu.

Click the "Process Text" button.

The results will appear in the "Results" section below.

Deployment
This application is ready to be deployed on a service like Render.

Build Command: pip install -r requirements.txt

Start Command: gunicorn app:app

Remember to set the GEMINI_API_KEY in the "Environment" settings on your Render dashboard.
