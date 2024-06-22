# Street Sense Application

Street Sense is an innovative application designed to enhance urban mobility by accurately forecasting traffic speed and density on roads. Leveraging cutting-edge technologies such as ReactJS, Flask, and Python, Street Sense provides users with reliable traffic insights from their source to their destination, facilitating better route planning, reducing congestion, and improving overall traffic management.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Project Demo](#license)
7. [Contributing](#project-demo)

## Introduction

Street Sense is designed to revolutionize urban mobility by forecasting traffic speed and density on roads using advanced data structures and algorithms. The application utilizes a quad tree where nodes represent sensors installed on roads, and edges are defined by the distances between pairs of nodes. This approach enables efficient spatial search and provides users with accurate traffic insights for efficient route planning.

## Features

1. **Efficient Spatial Searching Algorithm**: Utilizes advanced graph-based algorithms to analyze spatial-temporal data from road sensors.
2. **User-Friendly Interface**: Visually represents traffic conditions and provides route recommendations through an intuitive design.
3. **Real-Time Updates**: Features dynamic input handling with real-time traffic updates and communication.
4. **Efficient Route Planning**: Offers optimized routes to reduce congestion and enhance travel efficiency.

## Technologies Used

- **Frontend**: ReactJS
- **Backend**: Flask, Flask-CORS, Flask-SocketIO
- **Mapping and Geolocation**: Mapbox API, MapboxGL, Geopy, Nominatim, OpenRouteService
- **Data Structures**: LinkedList, Quad Tree
- **Programming Languages**: JavaScript, Python

## Installation

### Prerequisites

- Node.js
- Python 3
- pip

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/streetsense.git
   cd streetsense
   ```

2. Set up a virtual environment inside the backend directory:
   ```sh
   cd backend
   python3 -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required packages:
   ```sh
   pip install Flask Flask-CORS Flask-SocketIO Geopy Nominatim
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```

2. Install the required packages:
   ```sh
   npm install
   ```

## Usage

1. Open two terminals.
   
2. In the first terminal, navigate to the frontend directory and start the React development server:
   ```sh
   cd frontend
   npm run dev
   ```

3. In the second terminal, navigate to the backend directory and start the Flask server:
   ```sh
   cd backend
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   python3 app.py
   ```

4. Open your web browser and navigate to `http://localhost:5173/Streetsense`.

5. Use the interactive map to visualize traffic conditions.

6. Enter your source and destination to receive route recommendations and traffic insights.

7. Monitor real-time updates for dynamic traffic conditions.

## Project Demo 

A project demo of the 
   - site can be seen here - https://vimeo.com/965215160?share=copy
   - map component can be seen here - https://vimeo.com/965196690?share=copy

## Contributing

We welcome contributions to improve Street Sense! Please fork the repository and create a pull request with your changes. Ensure your code follows the existing style and includes tests where applicable.

---

Thank you for using Street Sense! We hope this application enhances your urban mobility experience. For any issues or suggestions, please open an issue on GitHub.
