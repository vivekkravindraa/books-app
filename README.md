## Mock UI

<img src="https://github.com/vivekkravindraa/books-app/blob/master/atom-expanded.png" alt="atom-expanded" />

<img src="https://github.com/vivekkravindraa/books-app/blob/master/atom-minimized.png" alt="atom-minimized" />

## How to run the app in your local ?

In the project directory, you can run:


```
$ yarn install
```

and then do:


```
$ yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployed Application

Open [https://atom-books.netlify.app](https://atom-books.netlify.app) to view it in the browser.

## Dockerize Application

```
$ yarn build
```

```
$ docker build . -t react-docker
```

```
$ docker images
```

```
$ docker run -p 8000:80 react-docker
```

```
$ docker ps
```

Open [http://localhost:8000](http://localhost:8000) to view it in the browser.
