from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import random
from emotions_data import emotions

app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # or ["*"] to allow all (not recommended in prod)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/")
async def root(request : Request):
    return_data = random.choice(emotions)
    print(await request.json())
    return return_data