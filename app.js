import express from "express";
import home from "./data/home.json" with {type: "json"};
import contact from "./data/contact.json" with {type: "json"};
import about from "./data/about.json" with {type: "json"};

const app = express();

const PORT = process.env.PORT || 3000;

// Homepage.
app.route("/")
.get((req, res) => {
    if (home) {
    res.json(home);
    } else {
        throw new Error();
    }
}).post((req, res) => {
    res.json(home);
}).put((req, res) => {
    res.json(home);
});

// About page.
app.route("/about")
.get((req, res) => {
    if (about) {
    res.json(about);
    } else {
        throw new Error();
    }
}).post((req, res) => {
    res.json(about);
}).put((req, res) => {
    res.json(about);
})

// Contact page.
app.route("/contact")
.get((req, res) => {
    if (contact) {
    res.json(contact);
    } else {
        throw new Error();
    }
}).post((req, res) => {
    res.json(contact);
}).put((req, res) => {
    res.json(contact);
})

// Purposeful error testing.
app.route("/error")
.get((req, res) => {
    res.json(error);
})

// Error handling.
app.use((req, res, next) => {
  res.status(404).send("Route not found");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Issue loading data.");
})

app.listen(PORT, () => {
    console.log(`The server is running on port: ${PORT}`);
});