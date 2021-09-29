/* jshint node: true */

var TAFFY = require('taffy');

var books = TAFFY([
    {"title":  "Złota księga bajek",
     "author": "Opracowanie zbiorowe",
     "genre":  "bajki"
    },
    {"title":  "Kopciuszek",
     "author": "Januszewska Hanna",
     "genre":"bajki"},
    {"title":  "Baśnie",
     "author": "Hans Christian Andersen",
     "genre":"bajki"},
    {"title":  "Baśnie braci Grimm",
        "author": "Bracia Grimm",
        "genre":"bajki"},
    {"title":  "Cuda Polski. Zamki i pałace",
     "author": "Opracowanie zbiorowe",
     "genre":"albumy"},
    {"title":  "Cuda Polski. Zamki i pałace",
     "author": "Opracowanie zbiorowe",
     "genre":"albumy"},
    {"title":  "Ilustrowany Atlas Świata",
        "author": "Opracowanie zbiorowe",
        "genre":"albumy"},
    {"title":  "Język C++. Kompendium wiedzy",
     "author": "Stroustrup Bjarne",
     "genre":"informatyka"},
    {"title":  "Node.js, MongoDB, AngularJS. Kompendium wiedzy",
     "author": "Dayley Brad",
     "genre":"informatyka"},
    {"title":  "Elementy grafiki komputerowej",
     "author": "Michał Jankowski",
     "genre":"informatyka"},
    {"title":  "AngularJS. Profesjonalne techniki",
     "author": "Freeman Adam",
     "genre":"informatyka"},
    {"title":  "Laravel. Tworzenie aplikacji. Receptury",
     "author": "Matula Terry",
     "genre":"informatyka"},
    {"title":  "HaemelOpenGL SuperBible: Comprehensive Tutorial and Reference (6th Edition) ",
     "author": "Graham Sellers, Richard S. Wright, Jr., Nicholas Haemel",
     "genre":"informatyka"},
    {"title":  "Prawo podatkowe. Przepisy 2015",
     "author": "Prus Anna",
     "genre":"prawo"},
    {"title":  "Zbiór cywilny 2015",
     "author": "Opracowanie zbiorowe",
     "genre":"prawo"},
    {"title":  "Zbiór karny 2015",
     "author": "Opracowanie zbiorowe",
     "genre":"prawo"},
    {"title":  "Kodeks Drogowy",
        "author": "Opracowanie zbiorowe",
        "genre":"prawo"},
    {"title":  "Potęga podświadomości",
     "author": "Murphy Joseph",
     "genre":"psychologia"},
    {"title":  "Test Marshmallow",
     "author": "Mischel Walter",
     "genre":"psychologia"},
    {"title":  "Kobiety, które kochają za bardzo",
     "author": "Norwood Robin",
     "genre":"psychologia"},
    {"title":  "Techniki Szybkiego Uczenia Się",
        "author": "Opracowanie zbiorowe",
        "genre":"psychologia"},
    {"title":  "Warszawa lata 60",
     "author": "Opracowanie zbiorowe",
     "genre":"sztuka"},
    {"title":  "Odczuwanie architektury",
     "author": "Rassmusen Steen Eiler",
     "genre":"sztuka"},
    {"title":  "Najpiękniejsze mosty świata",
     "author": "Irteński Tadeusz",
     "genre":"albumy"},
    {"title":  "Nowy Leksykon Sztuki",
        "author": "Opracowanie zbiorowe",
        "genre":"sztuka"},
    {"title":  "Asembler dla procesorów Intel",
        "author": "Opracowanie zbiorowe",
        "genre":"programowanie"},
    {"title":  "Wprowadzenie do algorytmów",
        "author": "Thomas H. Cormen",
        "genre":"programowanie"},
    {"title":  "Java Podstawy",
        "author": "C. Horstmann, G. Cornell",
        "genre":"programowanie"},
    {"title":  "Java Techniki Zaawansowane",
        "author": "Horstmann, Cornell",
        "genre":"programowanie"},
    {"title":  "Systemy Operacyjne",
        "author": "A. Tanenbaum, H. Bos",
        "genre":"administracja IT"},
    {"title":  "Jak działa Linux",
        "author": "B. Ward",
        "genre":"administracja IT"},
    {"title":  "CISCO CCNA",
        "author": "Opracowanie zbiorowe",
        "genre":"administracja IT"},
    {"title":  "CISCO CCENT",
        "author": "Opracowanie zbiorowe",
        "genre":"administracja IT"},
]);

module.exports = books;

