from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/game')
def game():
    # Здесь можно добавить логику для игры
    return render_template('game.html')

if __name__ == '__main__':
    app.run(debug=True)
