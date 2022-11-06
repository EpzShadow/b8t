from flask import Flask, request
from werkzeug.utils import secure_filename

from db import db_init, db
from models import Img

app = Flask(__name__)
# SQLAlchemy config. Read more: https://flask-sqlalchemy.palletsprojects.com/en/2.x/
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///img.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db_init(app)


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/upload', methods=['POST'])

def upload():
    pic = request.files['pic'] #comes from html (file name is pic)

    if not pic:
        return 'No pic uploaded', 400
    
    #something that helps make things secure?? when entered to db
    filename = secure_filename(pic.filename)
    mimetype = pic.mimetype
    
    img = Img(img=pic.read(), mimetype = mimetype, name=filename)
    db.session.add(img)
    db.session.commit()

    return "it works.", 200