# lbc react workshop

A React Workshop for building a simple product list.

## Requirements

* A recent npm version
  `sudo apt-get install npm` or if you already have npm you might want to
  upgrade it with: `sudo npm install npm@latest -g`

* A recent node version
  `sudo apt-get install n && sudo n latest`

## Installation

```bash
$ git clone git@github.com:inside/lbc-react-workshop.git
# If using ssh fails, you can use https:
$ git clone https://github.com/inside/lbc-react-workshop.git
$ cd lbc-react-workshop
$ npm install
```

## Running
```
$ npm start
```

Then go to http://localhost:3000/

## Developing

Source files are in the `src/` directory. Start by editing `src/App.js`.

Here's a html snippet we will use in our app:
```
      <option value="">Toutes</option>
      <option value="divers">divers</option>
      <option value="immobilier">immobilier</option>
      <option value="loisirs">loisirs</option>
      <option value="maison">maison</option>
      <option value="materiel_professionnel">materiel_professionnel</option>
      <option value="multimedia">multimedia</option>
      <option value="services">services</option>
      <option value="vacances">vacances</option>
      <option value="vehicules">vehicules</option>
```
