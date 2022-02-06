<div align="center">
  <h3 align="center">Small Weather App</h3>

  <p align="center">
    Small Weather App powered by OpenWeatherMap
    <br />
    <br />
    <br />
    <a href="https://github.com/MrSnakeDoc/weather-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/MrSnakeDoc/weather-app/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The goal of this app is just to get the weather of a selected city. I wanted to try to work with an api other than the one I previously worked with (twitch api).
Since I'm new to working with ejs I wanted to make something fun and try myself with ejs.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [Nodejs](https://nodejs.org/en/)
- [Expressjs](https://expressjs.com/)
- [ejs](https://ejs.co/)
- [axios](https://github.com/axios/axios)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [lodash.merge](https://www.npmjs.com/package/lodash.merge)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To use this app you will need to install nodejs on your machine and create an account on [OpenWeatherMap](https://openweathermap.org/) to get an api key.

### Prerequisites

- nodejs

  - Windows
    [Download and install](https://nodejs.org/en/)

  - Linux

    - Debian

    ```bash
    sudo apt update
    sudo apt install nodejs
    sudo apt install npm
    ```

    - Fedora

    ```bash
    sudo dnf upgrade
    sudo dnf install nodejs
    ```

- npm
  ```bash
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [Open Weather](https://openweathermap.org/)
2. Clone the repo
   ```bash
   git clone https://github.com/MrSnakeDoc/weather-app.git
   ```
   or by ssh
   ```
   git clone git@github.com:MrSnakeDoc/weather-app.git
   ```
3. Install NPM packages
   ```bash
   npm install
   ```
4. Enter your API in `.env` file

   ```js
   API_KEY = 'PASTE YOUR OPENWEATHERMAP API KEY';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

To launch the app you need to write:

```bash
npm start
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the GNU GENERAL PUBLIC LICENSE Version 3. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

MrSnakeDoc - mrsnakedoc@gmail.com

Project Link: [https://github.com/MrSnakeDoc/weather-app](https://github.com/MrSnakeDoc/weather-app)

<p align="right">(<a href="#top">back to top</a>)</p>
