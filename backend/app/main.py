from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="AuditAI API",
    description="AI-powered Invoice Review System",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "Welcome to AuditAI 🚀"
    }

@app.get("/health")
def health():
    return {
        "status": "online",
        "backend": "working"
    }