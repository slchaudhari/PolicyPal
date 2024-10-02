
### 2. Backend Code (Flask)
#### `backend/app.py`
This will handle the backend with a simple Flask API.

```python
from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# API Key for OpenAI
openai.api_key = 'your_openai_api_key'

@app.route('/formfill', methods=['POST'])
def form_filling():
    data = request.json
    prompt = f"Fill this insurance form: {data['form_details']}"
    
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        max_tokens=150
    )
    
    return jsonify({"filled_form": response.choices[0].text.strip()})

if __name__ == '__main__':
    app.run(debug=True)
