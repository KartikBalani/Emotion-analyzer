
[Emotion_Analyzer_Guide.docx](https://github.com/user-attachments/files/21187165/Emotion_Analyzer_Guide.docx)


🎭 Emotion Analyzer
A full-stack web application that analyzes user reflections and returns the detected emotion along with confidence level. Built with React + Vite on the frontend and FastAPI on the backend.

🚀 How to Run the Project Locally
⚙️ Step 1: Clone the Repository
git clone https://github.com/KartikBalani/Emotion-analyzer.git
cd Emotion-analyzer

🧠 Step 2: Run the Backend (FastAPI)
1. Create a virtual environment (optional but recommended):
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate  # Windows

3. Install dependencies:
pip install fastapi uvicorn

5. Run the backend:
fastapi dev main.py

💻 Step 3: Run the Frontend (React + Vite)
1. Navigate to the frontend folder (if separated).
2. Install frontend dependencies:
npm install
3. Start the development server:
npm run dev

🌐 Open your browser at http://localhost:5173

🧪 Features
✏️ User types a reflection
🤖 FastAPI analyzes emotion (mock logic)
📈 Returns emotion + confidence
🔁 Styled with live reactivity and form validation

📦 Technologies Used
Frontend: React, TypeScript, Vite
Backend: FastAPI, Python
HTTP: Axios
Form Handling: react-hook-form
