from sqlalchemy import create_engine, Column, Integer, String, inspect
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# SQLite URL for SQLAlchemy
database_url = "sqlite:///./test.db"

# Create a new SQLAlchemy engine
engine = create_engine(database_url, connect_args={"check_same_thread": False})

# Create a configured "Session" class
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create a Base class for our models
Base = declarative_base()

# Example User model
class User(Base):
    __tablename__ = "users"
    __table_args__ = {'extend_existing': True}

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)

# Create the database tables only if they don't exist
inspector = inspect(engine)
if not inspector.has_table("users"):
    Base.metadata.create_all(bind=engine) 