from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


@app.post("/login")
async def login(dados: dict):

    email = dados.get("email")
    senha = dados.get("senha")

    if email == "admin@email.com" and senha == "123456":
        return {
            "status": "ok",
            "mensagem": "Login realizado com sucesso"
        }

    return {
        "status": "erro",
        "mensagem": "E-mail ou senha inválidos"
    }