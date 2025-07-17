from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from typing import Optional
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base, User as DBUser
from sqlalchemy import Column, Integer, String
from passlib.context import CryptContext

app = FastAPI()

# In-memory storage for demonstration purposes
users_db = {}

# OAuth2 scheme
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Password hashing context
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Ensure the User model is not redefined and the table creation logic is correctly implemented

# Remove any duplicate User model definitions
# Ensure Base.metadata.create_all() is called only once in the application lifecycle

# Import the User model from database.py
# Remove any duplicate User model definitions in main.py
# Ensure Base.metadata.create_all() is called only once in the application lifecycle

# Update the User model in the database to include email
# Update the fake_hash_password function to use bcrypt
def hash_password(password: str):
    return pwd_context.hash(password)

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

class UserCreate(BaseModel):
    username: str
    email: str
    password: str

@app.post("/register")
async def register_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(DBUser).filter(DBUser.username == user.username).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Username already registered")
    db_email = db.query(DBUser).filter(DBUser.email == user.email).first()
    if db_email:
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed_password = hash_password(user.password)
    new_user = DBUser(username=user.username, email=user.email, hashed_password=hashed_password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {"msg": "User registered successfully"}

# Update the login function to verify hashed passwords
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

@app.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(DBUser).filter(DBUser.username == form_data.username).first()
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    return {"access_token": user.username, "token_type": "bearer"}

@app.post("/logout")
async def logout(token: str = Depends(oauth2_scheme)):
    # In a real application, you would invalidate the token
    return {"msg": "User logged out successfully"}

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q} 